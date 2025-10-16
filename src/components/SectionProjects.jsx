import "../styles/projects.css";
import img from "../assets/Profile.png";
import { SiGithub } from "react-icons/si";

export default function SectionProjects() {
  const personalProjects = [
    {
      img: img,
      title: "E-Commerce Antigo",
      description:
        "Plataforma completa para venda de produtos ilícitos e compra de bicicletas usadas",
      links: {
        github: "",
        online: "",
      },
    },
    {
      img: img,
      title: "E-Commerce Antigo",
      description:
        "Plataforma completa para venda de produtos ilícitos e compra de bicicletas usadas",
      links: {
        github: "",
        online: "",
      },
    },
    {
      img: img,
      title: "E-Commerce Antigo",
      description:
        "Plataforma completa para venda de produtos ilícitos e compra de bicicletas usadas",
      links: {
        github: "",
        online: "",
      },
    },
  ];
  const professionalProjects = [
    {
      img: img,
      title: "E-Commerce Antigo",
      description:
        "Plataforma completa para venda de produtos ilícitos e compra de bicicletas usadas",
      links: {
        github: "",
        online: "",
      },
    },
    {
      img: img,
      title: "E-Commerce Antigo",
      description:
        "Plataforma completa para venda de produtos ilícitos e compra de bicicletas usadas",
      links: {
        github: "",
        online: "",
      },
    },
    {
      img: img,
      title: "E-Commerce Antigo",
      description:
        "Plataforma completa para venda de produtos ilícitos e compra de bicicletas usadas",
      links: {
        github: "",
        online: "",
      },
    },
  ];
  return (
    <section id="projects">
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--bg-color-2)"
            fillOpacity="1"
            d="M0,192L48,208C96,224,192,256,288,266.7C384,277,480,267,576,250.7C672,235,768,213,864,202.7C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <h2>
        Meus <span>Projetos</span>
      </h2>
      <div className="boxContainer professional">
        <h3>Profissional</h3>
        <nav>
          <ul>
            {professionalProjects.map((project, index) => (
              <li key={`professional-${index}`}>
                <div className="img">
                  <img src={project.img} alt="" />
                </div>
                <div className="content">
                  <span className="projectTitle">{project.title}</span>
                  <p>{project.description}</p>
                  <div className="linksContainer">
                    <a href={project.links.github}>
                      <SiGithub size={24} />
                      <span>Github</span>
                    </a>
                    <a href={project.links.online}>
                      <SiGithub size={24} />
                      <span>Ver Online</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="boxContainer personal">
        <h3 className="personal">Pessoal</h3>
        <nav>
          <ul>
            {personalProjects.map((project, index) => (
              <li key={`personal-${index}`}>
                <div className="img">
                  <img src={project.img} alt="" />
                </div>
                <div className="content">
                  <span className="projectTitle">{project.title}</span>
                  <p>{project.description}</p>
                  <div className="linksContainer">
                    <a href={project.links.github}>
                      <SiGithub size={24} />
                      <span>Github</span>
                    </a>
                    <a href={project.links.online}>
                      <SiGithub size={24} />
                      <span>Ver Online</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
