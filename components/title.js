export default function Title({ children }) {
  return (
    <h1>
      {children}
      <style jsx>
        {`
          h1 {
            text-align: center;
            margin: 10px;

            font-size: 3rem;
            background: -webkit-linear-gradient(skyblue, blue);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </h1>
  );
}
