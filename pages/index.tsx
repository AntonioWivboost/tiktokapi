import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TikTokLogin from "@/components/TikTokLogin/TikTokLogin";
import styles from '../styles/index.module.css';
export default function App() {

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  // Ejemplo simple de verificación de sesión
  // En una aplicación real, verificarías si hay una sesión activa en el servidor
  useEffect(() => {
    const userSession = localStorage.getItem('tikTokUserSession');
    if (userSession) {
      try {
        const sessionData = JSON.parse(userSession);
        if (sessionData && sessionData.userId) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error parsing session data:', error);
      }
    }
  }, []);

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };


  return (
    <main>
      <h1>Tik Tok Api</h1>
      {isLoggedIn ? (
              <button 
                className={styles.dashboardButton}
                onClick={handleGoToDashboard}
              >
                Ir a mi Dashboard
              </button>
            ) : (
              <div className={styles.loginWrapper}>
                <TikTokLogin />
              </div>
            )}
      <Footer />
    </main>
  );
}
