import Head from '../components/Head';
import Title from '../components/title';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import Image from 'next/image';
export default function Home() {
  return (
    <Layout>
      <Head />
      <Title>Prototipo de blog con Next JS y Styled JSX</Title>
      <main className="card">
        <h3>Practica de Next JS</h3>
        <p>
          Prototipo con datos de la api de Jsonplaceholder,contiene pagina de
          usuarios y pagina individual para cada uno. Tambien pagina con post y
          una individual para cada post.
        </p>
        <Image src="/images/json.jpg" width="1300" height="400" />

        <div>
          <h3>Descripción de conceptos aplicados</h3>
          <p>
            Página de post y detalles hechas con serversiderender.Página de
            usuarios hecha con getstaticprops y la página de detalles agregue
            getStaticPaths.
          </p>
          Tipos de renderizado
          <p>
            Por el Cliente (Client Side Generation) Contenido renderizado en el
            navegador por Javascript. Angular, React, Vue. Ejemplo con
            create-react-app.
          </p>
          <p>
            Por el Servidor (Server Side Rendering - SSR) Servidor crea HTML
            antes de enviarlo al cliente. Node/ExpressJS, NextJS
          </p>
          <p>
            Contenido estatico No es generado ni por el cliente, ni por el
            servidor. Es servido exactamente como esta creado.
          </p>
        </div>
      </main>
      <style>
        {`
        body{min-heigth:100vh}
        p{font-size:20px}
         
          .card {
            margin: 1rem;    
            flex-basis: 45%;
            padding: 1.5rem;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          
          .card:hover,
          .card:focus,
          .card:active {
            
            border-width: 4px;
            border-style: solid;
            border-image: linear-gradient(to right, darkblue, darkorchid) 1;
          }
            
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
            color:darkblue;
            
          }
          
          .card main {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
            
            
          }
          
       
        
        `}
      </style>
      <Footer />
    </Layout>
  );
}
