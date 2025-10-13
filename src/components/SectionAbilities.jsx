import "../styles/abilities.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs, // Exemplo: Node.js
  SiVite,
  SiGit, // Exemplo: Vite
} from "react-icons/si";

function Abilities() {
  return (
    <section id="abilities">
      <h2>
        Minhas <span>Habilidades</span>
      </h2>
      <ul>
        <li className="html">
          <SiHtml5 size={40}></SiHtml5>
          <span>HTML</span>
        </li>
        <li className="css">
          <SiCss3 size={40}></SiCss3>
          <span>CSS</span>
        </li>
        <li className="js">
          <SiJavascript size={40}></SiJavascript>
          <span>JS</span>
        </li>
        <li className="react">
          <SiReact size={40}></SiReact>
          <span>React</span>
        </li>
        <li className="nodejs">
          <SiNodedotjs size={40}></SiNodedotjs>
          <span>NodeJS</span>
        </li>
        <li className="vite">
          <SiVite size={40}></SiVite>
          <span>Vite</span>
        </li>
        <li className="git">
          <SiGit size={40}></SiGit>
          <span>Git</span>
        </li>
      </ul>
    </section>
  );
}
export default Abilities;
