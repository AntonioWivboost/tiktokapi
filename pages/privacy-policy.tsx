import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Legal.module.css'; // Mismo archivo de estilos que usamos para términos

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Política de Privacidad</title>
        <meta name="description" content="Política de privacidad de nuestra plataforma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Política de Privacidad</h1>
        
        <div className={styles.content}>
          <p>Última actualización: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2>1. Introducción</h2>
            <p>[Nombre de tu empresa] (&quot;nosotros&quot;, &quot;nuestra&quot;, &quot;nuestro&quot;) se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando utiliza nuestra aplicación y sitio web en [tu-dominio.com] (&quot;Servicio&quot;).</p>
            <p>Por favor lea esta política de privacidad cuidadosamente. Si no está de acuerdo con los términos de esta política de privacidad, por favor no acceda al servicio.</p>
          </section>
          
          <section>
            <h2>2. Información que Recopilamos</h2>
            
            <h3>2.1 Información Personal</h3>
            <p>Podemos recopilar información de identificación personal, como:</p>
            <ul>
              <li>Nombre y apellido</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección, estado, provincia, código postal</li>
              <li>Fecha de nacimiento</li>
              <li>Información de pago (para transacciones)</li>
            </ul>
            
            <h3>2.2 Información de Uso</h3>
            <p>También podemos recopilar información sobre cómo se accede y utiliza el Servicio. Esta información puede incluir:</p>
            <ul>
              <li>Tipo de dispositivo</li>
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Páginas visitadas</li>
              <li>Tiempo de acceso</li>
              <li>Sistema operativo</li>
              <li>Patrones de navegación</li>
            </ul>
          </section>
          
          <section>
            <h2>3. Uso de la Información</h2>
            <p>Utilizamos la información recopilada para varios fines:</p>
            <ul>
              <li>Proporcionar, operar y mantener nuestro Servicio</li>
              <li>Mejorar, personalizar y expandir nuestro Servicio</li>
              <li>Entender y analizar cómo utiliza nuestro Servicio</li>
              <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
              <li>Comunicarnos con usted para proporcionar actualizaciones y otra información relacionada con el Servicio</li>
              <li>Enviar correos electrónicos de marketing (con su consentimiento)</li>
              <li>Detectar, prevenir y abordar problemas técnicos</li>
            </ul>
          </section>
          
          <section>
            <h2>4. Cookies y Tecnologías de Seguimiento</h2>
            <p>Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro Servicio y mantener cierta información. Las cookies son archivos con pequeña cantidad de datos que pueden incluir un identificador único anónimo.</p>
            <p>Puede instruir a su navegador para que rechace todas las cookies o para que le avise cuando se envía una cookie. Sin embargo, si no acepta cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio.</p>
          </section>
          
          <section>
            <h2>5. Divulgación de Datos</h2>
            <p>Podemos divulgar su información personal en las siguientes situaciones:</p>
            <ul>
              <li><strong>Requisitos legales:</strong> Para cumplir con una obligación legal.</li>
              <li><strong>Protección de derechos:</strong> Para proteger y defender nuestros derechos o propiedad.</li>
              <li><strong>Seguridad pública:</strong> Para prevenir o investigar posibles infracciones en relación con el Servicio.</li>
              <li><strong>Proveedores de servicios:</strong> Para compartir con terceros que nos ayudan a operar nuestro Servicio.</li>
              <li><strong>Transferencia de negocio:</strong> En conexión con, o durante las negociaciones de, cualquier fusión, venta de activos de la empresa, financiación o adquisición.</li>
            </ul>
          </section>
          
          <section>
            <h2>6. Seguridad de los Datos</h2>
            <p>La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger su información personal, no podemos garantizar su seguridad absoluta.</p>
          </section>
          
          <section>
            <h2>7. Sus Derechos de Privacidad</h2>
            <p>Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, como:</p>
            <ul>
              <li>El derecho a acceder a la información que tenemos sobre usted</li>
              <li>El derecho a rectificar o actualizar su información personal</li>
              <li>El derecho a eliminar su información personal</li>
              <li>El derecho a oponerse al procesamiento de sus datos</li>
              <li>El derecho a la portabilidad de los datos</li>
              <li>El derecho a retirar el consentimiento</li>
            </ul>
          </section>
          
          <section>
            <h2>8. Cambios a Esta Política de Privacidad</h2>
            <p>Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha en la parte superior de esta Política de Privacidad.</p>
          </section>
          
          <section>
            <h2>9. Contacto</h2>
            <p>Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos:</p>
            <p>Email: [tu-email@dominio.com]</p>
            <p>Dirección: [Tu dirección física]</p>
          </section>
        </div>
        
        <div className={styles.footer}>
          <Link href="/">Volver al inicio</Link> | 
          <Link href="/terms-and-conditions"> Términos y Condiciones</Link>
        </div>
      </main>
    </div>
  );
}