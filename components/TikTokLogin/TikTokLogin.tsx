// components/TikTokLogin.tsx
import { useState } from 'react';
import styles from '../../styles/TikTokLogin.module.css';

const TikTokLogin: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  // Obtenemos las claves desde variables de entorno
  const clientKey = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_KEY;
  const redirectUri = process.env.NEXT_PUBLIC_TIKTOK_REDIRECT_URI || 'http://localhost:3000/api/auth/tiktok/callback';
  
  // Manejar el clic en el botón de login
  const handleTikTokLogin = () => {
    // Limpiar errores previos
    setError('');
    
    if (!clientKey) {
      setError('Error de configuración: Clave de cliente no encontrada');
      console.error('Error: NEXT_PUBLIC_TIKTOK_CLIENT_KEY no está definida');
      return;
    }
    
    setLoading(true);
    
    try {
      // Construir manualmente la URL de autorización de TikTok
      const state = 'state-' + Math.random().toString(36).substring(2, 15);
      const authUrl = `https://www.tiktok.com/v2/auth/authorize/` +
        `?client_key=${clientKey}` +
        `&scope=user.info.basic` +
        `&response_type=code` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&state=${state}`;
      
      // Almacenar el estado para verificarlo cuando vuelva
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('tiktok_auth_state', state);
      }
      
      // Redireccionar al usuario a TikTok para autorización
      window.location.href = authUrl;
    } catch (err) {
      setLoading(false);
      setError('Ocurrió un error al iniciar el proceso de login');
      console.error('Error al redireccionar a TikTok:', err);
    }
  };

  // Manejar reintentos
  const handleRetry = () => {
    setError('');
    setLoading(false);
  };

  return (
    <div className={styles.loginContainer}>
      {error ? (
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{error}</p>
          <button 
            className={styles.retryButton}
            onClick={handleRetry}
          >
            Reintentar
          </button>
        </div>
      ) : (
        <button 
          className={styles.customTikTokButton} 
          onClick={handleTikTokLogin}
          disabled={loading}
        >
          {loading ? (
            <span className={styles.loadingSpinner}></span>
          ) : (
            <>
              <span className={styles.tiktokIcon}></span>
              <span>Iniciar sesión con TikTok</span>
            </>
          )}
        </button>
      )}
      
      <p className={styles.infoText}>
        Al iniciar sesión, serás redirigido a TikTok para autorizar la aplicación
      </p>
    </div>
  );
};

export default TikTokLogin;