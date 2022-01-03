import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        {/*href representa ruta dentro de nuestro directorio */}
        <a>Inicio</a>
      </Link>
      <Link href="/users">
        <a>Usuarios</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <style jsx>{`
        nav {
          padding-top: 10px;
          background-color: darkblue;
          width: 100%;
        }
        a {
          position: relative;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          color: #a0a0a0;
          font-size: 30px;
          letter-spacing: 0.5px;
          padding: 0 10px;
        }
        a:after {
          content: '';
          position: absolute;
          background-color: black;
          height: 3px;
          width: 0;
          left: 0;
          bottom: -10px;
          transition: 0.3s;
        }
        a:hover {
          color: #ffffff;
        }
        a:hover:after {
          width: 100%;
        }
      `}</style>
      {/* <Link href='/posts/[id]' as={`/posts/${5}`}>
        <a>Post #5</a>
      </Link> */}
    </nav>
  );
}
