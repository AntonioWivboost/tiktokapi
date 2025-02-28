import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Legal.module.css'; 

export default function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Términos y Condiciones</title>
        <meta name="description" content="Términos y condiciones de uso de nuestra plataforma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Términos y Condiciones</h1>
        
        <div className={styles.content}>
          <p>Última actualización: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2>1. Introducción</h2>
            <p>Bienvenido a [Nombre de tu aplicación] (&quot;nosotros&quot;, &quot;nuestra&quot;, &quot;nuestro&quot;). Al acceder o utilizar nuestro sitio web en [tu-dominio.com] y nuestros servicios, usted (&quot;usuario&quot;, &quot;usted&quot;, o &quot;su&quot;) acepta estar sujeto a estos Términos y Condiciones. Le recomendamos que lea cuidadosamente este documento.</p>
          </section>
          
          <section>
            <h2>2. Uso del Servicio</h2>
            <p>Nuestros servicios están disponibles solo para personas que puedan celebrar contratos legalmente vinculantes según la legislación aplicable. Al utilizar nuestros servicios, usted declara y garantiza que tiene la capacidad legal para aceptar estos términos.</p>
            
            <h3>2.1 Cuenta de Usuario</h3>
            <p>Para acceder a ciertas funciones de nuestra plataforma, es posible que deba registrarse y crear una cuenta. Usted es responsable de mantener la confidencialidad de su información de cuenta y contraseña, y acepta la responsabilidad de todas las actividades que ocurran bajo su cuenta.</p>
            
            <h3>2.2 Uso Prohibido</h3>
            <p>Usted acepta no utilizar el servicio para:</p>
            <ul>
              <li>Actividades ilegales o fraudulentas</li>
              <li>Recopilar información personal identificable de otros usuarios</li>
              <li>Interferir con el funcionamiento normal del servicio</li>
              <li>Distribuir malware o cualquier otro código malicioso</li>
              <li>Cualquier uso que imponga una carga irrazonable o desproporcionadamente grande en nuestra infraestructura</li>
            </ul>
          </section>
          
          <section>
            <h2>3. Contenido</h2>
            <p>Nuestro servicio permite a los usuarios publicar, enlazar, almacenar, compartir y de otra manera poner a disposición cierta información, textos, gráficos, videos u otros materiales. Usted es responsable del contenido que publica en o a través del servicio.</p>
          </section>
          
          <section>
            <h2>4. Propiedad Intelectual</h2>
            <p>El servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de [Nombre de tu empresa] y sus licenciantes. El servicio está protegido por derechos de autor, marcas registradas y otras leyes tanto de [tu país] como de otros países.</p>
          </section>
          
          <section>
            <h2>5. Terminación</h2>
            <p>Podemos terminar o suspender su acceso inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo, sin limitación, si usted incumple estos Términos y Condiciones.</p>
          </section>
          
          <section>
            <h2>6. Limitación de Responsabilidad</h2>
            <p>En ningún caso [Nombre de tu empresa], ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo, incluyendo, sin limitación, pérdida de beneficios, datos, uso, buena voluntad, u otras pérdidas intangibles.</p>
          </section>
          
          <section>
            <h2>7. Cambios a los Términos</h2>
            <p>Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Es su responsabilidad revisar nuestros Términos periódicamente para cambios. Su uso continuado de nuestro servicio después de la publicación de cualquier cambio a estos Términos constituye su aceptación de dichos cambios.</p>
          </section>
          
          <section>
            <h2>8. Contacto</h2>
            <p>Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en:</p>
            <p>Email: [tu-email@dominio.com]</p>
            <p>Dirección: [Tu dirección física]</p>
          </section>
        </div>
        
        <div className={styles.footer}>
          <Link href="/">Volver al inicio</Link> | 
          <Link href="/privacy-policy"> Política de Privacidad</Link>
        </div>
      </main>
    </div>
  );
}