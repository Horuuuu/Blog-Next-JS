import React from 'react';
import { SiNextdotjs, SiReact, SiCss3, SiJavascript } from 'react-icons/si';
import { ImHtmlFive } from 'react-icons/im';
function Footer() {
  return (
    <div className="foot">
      <hr />
      <SiNextdotjs font-size="35px" />
      <SiReact font-size="35px" color="skyblue" />
      <ImHtmlFive font-size="35px" color="orange" />
      Practica de Next JS con Styled JSX
      <style jsx>{`
        .foot {
          font-size: 35px;
        }
      `}</style>
      <SiCss3 font-size="35px" color="blue" />
      <SiJavascript font-size="35px" color="gold" />
    </div>
  );
}

export default Footer;
