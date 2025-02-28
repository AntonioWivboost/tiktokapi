// pages/login.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TikTokLogin from '../components/TikTokLogin/TikTokLogin';
import styles from '../styles/Login.module.css';

const Login: React.FC = () => {
  const router = useRouter();
  const { error, error_description } = router.query;
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (error) {
      let message = 'Ocurrió un error durante el inicio de sesión.';
      
      switch (error) {
        case 'no_code':
          message = 'No se recibió un código de autorización de TikTok.';
          break;
        case 'token_exchange_failed':
          message = 'Error al intercambiar el código por un token.';
          break;
        case 'user_info_failed':
          message = 'Error al obtener la información del usuario.';
          break;
        case 'server_error':
          message = 'Error del servidor al procesar la autenticación.';
          break;
        default:
          if (error_description) {
            message = `Error: ${error_description}`;
          } else {
            message = `Error: ${error}`;
          }
      }
      
      setErrorMessage(message);
    }
  }, [error, error_description]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Iniciar Sesión</title>
        <meta name="description" content="Inicia sesión en nuestra aplicación" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a Nuestra App</h1>
        
        {errorMessage && (
          <div className={styles.errorMessage}>
            {errorMessage}
          </div>
        )}
        
        <div className={styles.loginOptions}>
          <div className={styles.loginCard}>
            <h2>Iniciar sesión con TikTok</h2>
            <p>Conecta tu cuenta de TikTok para acceder a todas las funciones.</p>
            <TikTokLogin />
          </div>
          
          {/* Puedes agregar más opciones de inicio de sesión aquí */}
        </div>
      </main>
    </div>
  );
};

export default Login;