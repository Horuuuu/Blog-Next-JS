import Head from '../../components/Head';
import Title from '../../components/title';
import Layout from '../../components/layout';
import Footer from '../../components/Footer';
//estrae post de props
export default function Post({ post }) {
  // const router = useRouter();

  return (
    <Layout>
      <Head />
      <Title>Detalles del post</Title>
      <div className="card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <style jsx>
        {`
          .card {
            margin: 7rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:focus,
          .card:active {
            border-color: #0070f3;
          }
          .card:hover {
            
            border-width: 4px;
            border-style: solid;
            border-image: linear-gradient(to right, darkblue, darkorchid) 1;
          }
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 2.5rem;
          }
          .card p {
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
//el context es un objeto que tiene varias propiedades ,una es params
//con params obtengo los parametros de la url [id]del post
export async function getServerSideProps({ params }) {
  //tambien puede,context.params.id
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}` //tomo parametro ,el id de cada post
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
