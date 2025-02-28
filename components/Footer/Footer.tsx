import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <div className={styles.linkGroup}>
            <h3>Información Legal</h3>
            <div className={styles.links}>
              <Link href="/terms-and-conditions">
                <span className={styles.link}>Términos y Condiciones</span>
              </Link>
              <Link href="/privacy-policy">
                <span className={styles.link}>Política de Privacidad</span>
              </Link>
            </div>
          </div>
          
          {/* Puedes agregar más grupos de enlaces aquí */}
          <div className={styles.linkGroup}>
            <h3>Compañía</h3>
            <div className={styles.links}>
              <Link href="/about">
                <span className={styles.link}>Sobre Nosotros</span>
              </Link>
              <Link href="/contact">
                <span className={styles.link}>Contacto</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>© {currentYear} Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}