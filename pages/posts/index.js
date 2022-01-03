import Head from '../../components/Head';
import Title from '../../components/title';
import Layout from '../../components/layout';
import Link from 'next/link';
import Footer from '../../components/Footer';
export default function Posts({ posts }) {
  // CLIENT SIDE RENDERING
  // const [posts, setPosts] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const newPosts = await res.json();
  //     setPosts(newPosts);
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <Layout>
      <Head />

      <Title>Posts </Title>
      <div className="grid">
        {posts.map((post) => {
          return (
            //rutas dinamicas

            <Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
              <a className="card">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
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
            
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 2rem;
          }
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
            font-size: 1.8rem;
            color: darkblue;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
            
          }button {
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
            margin-top:5px;
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
// desde el servidor SERVER SIDE RENDER
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
