// pages/api/auth/tiktok/callback.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface TokenResponse {
  access_token: string;
  expires_in: number;
  open_id: string;
  refresh_token: string;
  refresh_expires_in: number;
  scope: string;
  token_type: string;
  error?: string;
  error_description?: string;
}

interface UserData {
  data: {
    user: {
      open_id: string;
      union_id: string;
      display_name: string;
      avatar_url?: string;
      bio_description?: string;
    };
  };
  error?: {
    code: string;
    message: string;
    log_id: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Obtener el código de autorización de la URL
  const { code, state, error, error_description } = req.query;

  // Registrar información para depuración
  console.log('Callback recibido:', {
    code: code ? `${code.toString().substring(0, 6)}...` : null, // Solo mostrar parte del código por seguridad
    state,
    error,
    error_description
  });

  // Verificar si hay un error
  if (error) {
    console.error('Error en la autorización de TikTok:', error, error_description);
    return res.redirect(`/login?error=${error}&error_description=${error_description}`);
  }

  // Verificar si existe el código de autorización
  if (!code) {
    console.error('No se recibió el código de autorización de TikTok');
    return res.redirect('/login?error=no_code');
  }

  // Variables necesarias para el intercambio de tokens
  const clientKey = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_KEY;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;
  const redirectUri = process.env.NEXT_PUBLIC_TIKTOK_REDIRECT_URI;

  if (!clientKey || !clientSecret || !redirectUri) {
    console.error('Faltan variables de entorno necesarias');
    return res.redirect('/login?error=server_configuration');
  }

  try {
    console.log('Intentando intercambiar el código por un token...');
    
    // Intercambiar el código por un token de acceso
    const tokenResponse = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
      },
      body: new URLSearchParams({
        client_key: clientKey,
        client_secret: clientSecret,
        code: code as string,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    const tokenData = await tokenResponse.json() as TokenResponse;
    
    if (!tokenResponse.ok || tokenData.error) {
      console.error('Error al obtener el token de acceso:', tokenData);
      return res.redirect(`/login?error=token_exchange_failed&details=${encodeURIComponent(JSON.stringify(tokenData.error_description || 'Unknown error'))}`);
    }

    console.log('Token obtenido correctamente, accediendo a la información del usuario...');
    
    // Obtener información del usuario
    const userResponse = await fetch('https://open.tiktokapis.com/v2/user/info/', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
      },
    });

    const userData = await userResponse.json() as UserData;

    if (!userResponse.ok || userData.error) {
      console.error('Error al obtener información del usuario:', userData);
      return res.redirect(`/login?error=user_info_failed&details=${encodeURIComponent(JSON.stringify(userData.error || 'Unknown error'))}`);
    }

    console.log('Información del usuario obtenida correctamente, redirigiendo al dashboard...');

    // Construir los parámetros para la redirección
    const queryParams = new URLSearchParams({
      userId: userData.data.user.open_id,
      username: userData.data.user.display_name || 'Usuario de TikTok',
      auth: 'success',
    });

    // Redirigir al usuario al dashboard con los datos de sesión
    return res.redirect(`/dashboard?${queryParams.toString()}`);
  } catch (error) {
    console.error('Error en el proceso de autenticación de TikTok:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return res.redirect(`/login?error=server_error&message=${encodeURIComponent(errorMessage)}`);
  }
}