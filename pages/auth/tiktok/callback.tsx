// pages/api/auth/tiktok/callback-page.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../../styles/Callback.module.css';

const TikTokCallback: React.FC = () => {
  const router = useRouter();
  const { code, state, error, error_description } = router.query;

  useEffect(() => {
    if (router.isReady) {
      if (error) {
        console.error('Error en la autenticación de TikTok:', error, error_description);
        router.push(`/login?error=${error}&error_description=${error_description}`);
        return;
      }

      if (code) {
        // En lugar de procesar directamente aquí, llamamos a nuestro endpoint de API
        // Esto es para mantener las claves secretas en el servidor
        fetch(`/api/auth/tiktok/callback?code=${code}&state=${state}`)
          .then(response => {
            if (response.redirected) {
              window.location.href = response.url;
            } else {
              return response.json();
            }
          })
          .then(data => {
            if (data && data.error) {
              router.push(`/login?error=${data.error}`);
            } else if (data && data.success) {
              router.push('/dashboard');
            }
          })
          .catch(err => {
            console.error('Error procesando callback:', err);
            router.push('/login?error=callback_processing_error');
          });
      } else {
        router.push('/login?error=no_code');
      }
    }
  }, [router.isReady, code, state, error, error_description, router]);

  return (
    <div className={styles.callbackContainer}>
      <Head>
        <title>Procesando tu inicio de sesión con TikTok</title>
      </Head>
      <div className={styles.loadingSpinner}></div>
      <h1>Completando el inicio de sesión...</h1>
      <p>Por favor espera mientras procesamos tu inicio de sesión con TikTok.</p>
    </div>
  );
};

export default TikTokCallback;