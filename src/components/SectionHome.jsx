import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useState } from "react";
import particlesConfig from "../particles-config";
import "../styles/home.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { useTypewriter } from "react-simple-typewriter";

function SectionHome() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const [isDone, setIsDone] = useState(false);

  const [text] = useTypewriter({
    // 2. A lista de palavras muda dependendo se o primeiro ciclo já terminou
    words: isDone
      ? ["Gabriel Röpke", "Desenvolvedor", "Dev Front End", "Web Designer"]
      : ["", "Gabriel Röpke", "Desenvolvedor", "Dev Front End", "Web Designer"],

    // 3. O loop é infinito
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2500,

    // 4. A MÁGICA: Esta função é chamada quando um ciclo completo termina
    onLoopDone: () => setIsDone(true),
  });

  return (
    <section id="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-ropke-7338a9264/"
              target="_blank"
            >
              <FaLinkedinIn size={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Gabriel-Ropke" target="_blank">
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5548998159403" target="_blank">
              <BsChat size={24} />
            </a>
          </li>
        </ul>
      </nav>
      <h1>
        <span>Olá, eu sou </span>
        <span className="color">{text}</span>
      </h1>
      <p>
        Desenvolvedor Front-end & Criador de Soluções
        <br /> Digitais
      </p>
      <p className="subtitle">
        Transformo ideias em experiências digitais modernas e <br /> otimizadas
      </p>
      <div className="buttonContainer">
        <button>
          <a href="#projects">Ver projetos</a>
        </button>
        <button>
          <a href="https://wa.me/5548998159403" target="_blank">
            Contato no WhatsApp
          </a>
        </button>
      </div>
    </section>
  );
}

export default SectionHome;
