import React, { useRef } from "react";
import "../styles/about.css";
import profileImageUrl from "../assets/Profile.png";
import { HiCode, HiSun } from "react-icons/hi";
import { PiPaletteBold } from "react-icons/pi";
import useScrollOverflow from "../hooks/useOverflow"; // Use o novo hook

function SectionAbout() {
  const containerRef = useRef(null);

  // Agora recebemos um objeto com os dois estados
  const { isOverflowingTop, isOverflowingBottom } =
    useScrollOverflow(containerRef);
  return (
    <section id="about">
      <div className="imgContainer">
        <img src={profileImageUrl} alt="" />
      </div>
      <div className="infoContent">
        <h2 className="dontHaveBefore">
          Sobre <span>mim</span>
        </h2>
        <div
          ref={containerRef}
          className={`
        content
        ${isOverflowingTop ? "topOverflow" : ""}
        ${isOverflowingBottom ? "bottomOverflow" : ""}
      `}
        >
          <p>
            Sou desenvolvedor apaixonado por <span>tecnologia</span> e{" "}
            <span>design</span>. Crio interfaces modernas e otimizadas,
            transformando ideias em experiências digitais reais.
          </p>
          <p>
            Com experiência em <span>desenvolvimento front-end</span> e
            <span> conhecimento full stack</span>, trabalho com as tecnologias
            mais modernas do mercado para entregar soluções que fazem a
            diferença.
          </p>
        </div>
        <div className="boxContainer">
          <div className="box">
            <HiCode size={32}></HiCode>
            <span>Código Limpo</span>
          </div>
          <div className="box">
            <PiPaletteBold size={32}></PiPaletteBold>
            <span>Design Moderno</span>
          </div>
          <div className="box">
            <HiSun size={32}></HiSun>
            <span>Com paixão</span>
          </div>
        </div>
      </div>
      <div className="wave-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--bg-color-1)"
            fillOpacity="1"
            d="M0,192L48,208C96,224,192,256,288,266.7C384,277,480,267,576,250.7C672,235,768,213,864,202.7C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
export default SectionAbout;
