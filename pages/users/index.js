import Head from '../../components/Head';
import Link from 'next/link';
import Title from '../../components/title';
import Layout from '../../components/layout';
import Footer from '../../components/Footer';

export default function Users({ users }) {
  //props.users
  return (
    <Layout>
      <Head />

      <Title>Usuarios</Title>

      <div className="grid">
        {users.map((user) => {
          return (
            //rutas dinamicas[]
            <Link href={'/users/[id]'} as={`/users/${user.id}`} key={user.id}>
              <a className="card">
                <h3>Usuario</h3>
                <p>Nombre: {user.name}</p>
                <p>E-mail: {user.email}</p>
                <button>Detalles</button>
              </a>
            </Link>
          );
        })}
      </div>
      <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }
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
            color: darkblue;
          }
          
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
          
          button {
            background: #3498db;
            background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
            background-image: -moz-linear-gradient(top, #3498db, #2980b9);
            background-image: -ms-linear-gradient(top, #3498db, #2980b9);
            background-image: -o-linear-gradient(top, #3498db, #2980b9);
            background-image: linear-gradient(to bottom, #3498db, #2980b9);
            -webkit-border-radius: 28;
            -moz-border-radius: 28;
            border-radius: 28px;
            font-family: Courier New;
            color: #ffffff;
            margin-top:4px;
            font-size: 20px;
            padding: 10px 20px 10px 20px;
            text-decoration: none;
          }
          
          button:hover {
            background: #3dcccc;
            background-image: -webkit-linear-gradient(top, #3dcccc, #4f1278);
            background-image: -moz-linear-gradient(top, #3dcccc, #4f1278);
            background-image: -ms-linear-gradient(top, #3dcccc, #4f1278);
            background-image: -o-linear-gradient(top, #3dcccc, #4f1278);
            background-image: linear-gradient(to bottom, #3dcccc, #4f1278);
            text-decoration: none;
            cursor:pointer;
          }
        `}
      </style>
      <Footer />
    </Layout>
  );
}
//pagina prerenderizada o pagina estatica
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    //retorna objeto y dentro de props ,los usuarios
    props: {
      users,
    },
  };
}
