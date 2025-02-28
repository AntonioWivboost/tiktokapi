// pages/dashboard.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Dashboard.module.css';

interface UserData {
  id: string;
  username: string;
}

const Dashboard: React.FC = () => {
  const router = useRouter();
  const { userId, username, auth } = router.query;
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Verificar si el usuario está autenticado
    // En una aplicación real, verificarías la sesión o un token JWT
    if (router.isReady) {
      if (auth === 'success' && userId) {
        setUser({
          id: userId as string,
          username: (username as string) || 'Usuario de TikTok',
        });
      } else {
        // Aquí podrías hacer una llamada a tu API para verificar la sesión
        // Por ahora, simplemente simulamos la carga y redirigimos si no hay usuario
        setTimeout(() => {
          if (!userId) {
            router.push('/login');
          }
        }, 1000);
      }
      setLoading(false);
    }
  }, [router.isReady, auth, userId, username, router]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Cargando...</p>
      </div>
    );
  }

  if (!user) {
    return null; // No renderizar nada durante la redirección
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard de usuario" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a tu Dashboard</h1>
        
        <div className={styles.userInfo}>
          <h2>¡Hola, {user.username}!</h2>
          <p>Has iniciado sesión correctamente con TikTok.</p>
          <p>ID de usuario: {user.id}</p>
        </div>
        
        <div className={styles.dashboardContent}>
          {/* Aquí iría el contenido principal de tu dashboard */}
          <div className={styles.card}>
            <h3>Tus estadísticas</h3>
            <p>Contenido de estadísticas aquí...</p>
          </div>
          
          <div className={styles.card}>
            <h3>Acciones recientes</h3>
            <p>Lista de acciones recientes aquí...</p>
          </div>
        </div>
        
        <button 
          className={styles.logoutButton}
          onClick={() => {
            // Implementar la lógica de cierre de sesión
            router.push('/login');
          }}
        >
          Cerrar sesión
        </button>
      </main>
    </div>
  );
};

export default Dashboard;