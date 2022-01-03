import Head from '../../components/Head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Title from './../../components/title';
import Layout from '../../components/layout';
import Footer from '../../components/Footer';
export default function User({ user }) {
  //acceso a user
  const router = useRouter(); //para hacer ruta dinamicas

  if (router.isFallback) {
    //si no  esta la pagina en el path retorna
    //isfallback es una propiedad de router
    return <div>CARGANDO...</div>;
  }
  //SINO retorna
  return (
    <Layout>
      <Head />

      <Title>Usuario {user.name}</Title>
      <div className="card">
        <h3>Datos personales</h3>
        <Image
          src={`/images/${user.id}.jpg`}
          width={400}
          height={600}
          objectFit="cover"
        />
        <p>Nombre: {user.name}</p>
        <p>E-mail: {user.email}</p>
        <p>Telefono: {user.phone}</p>
        <p>Sitio web: {user.website}</p>
      </div>

      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {border-width: 4px;
            border-style: solid;
            border-image: linear-gradient(to right, darkblue, darkorchid) 1;
          }
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
            background: -webkit-linear-gradient(skyblue, blue);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .card p {
            margin: 0;
            font-size: 1.5rem;
            line-height: 1.5;
          }
        `}
      </style>
      <Footer />
    </Layout>
  );
}
//FUNCION REQUERIDA PARA PAGINAS DINAMICAS CON CONTENIDO ESTATICO
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const users = await res.json();

  //paths o paginas que quiero prerenderizar
  const paths = users.map((user) => {
    return {
      params: { id: `${user.id}` }, //la unica ruta dinamica es la que contiene el id
    };
  });

  return {
    paths, //paths prerenderizados
    fallback: true, //booleano---para que se agreguen mas paths
  };
}
//obtiene el id a travez de params
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
