import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import "../styles/contacts.css";
import { MdEmail } from "react-icons/md";
export default function SectionContacts() {
  const inputIsActive = (e) => {
    const input = e.target;
    const inputValue = e.target.value.length;
    inputValue > 0
      ? input.classList.add("active")
      : input.classList.remove("active");
  };
  return (
    <section id="contacts">
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--bg-color-3)"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,149.3C384,192,480,256,576,245.3C672,235,768,149,864,149.3C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <h2>
        Vamos <span>Conversar?</span>
      </h2>
      <p>Vamos criar algo incrível juntos? Entre em contato!</p>
      <div className="contactWays">
        <form action="POST">
          <div className="inputContainer">
            <input
              type="text"
              id="yourNameInput"
              onInput={(e) => inputIsActive(e)}
            />
            <label htmlFor="yourNameInput">Seu Nome</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              id="emailInput"
              onInput={(e) => inputIsActive(e)}
            />
            <label htmlFor="emailInput">Seu E-mail</label>
          </div>
          <div className="inputContainer">
            <textarea
              name="emailContent"
              id="emailContent"
              onInput={(e) => inputIsActive(e)}
            ></textarea>
            <label htmlFor="emailContent">Escreva sua Mensagem</label>
          </div>
          <button type="submit">
            <MdEmail size={24} />
            Enviar Mensagem
          </button>
        </form>
        <div className="linksContainer">
          <h4>Conecte-se comigo</h4>
          <ul>
            <li>
              <a href="https://wa.me/5548998159403" target="_blank">
                <SiWhatsapp size={24} fill="#2CC25A" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gabriel-ropke-7338a9264/"
                target="_blank"
              >
                <SiLinkedin size={24} fill="#085FA3" />
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/Gabriel-Ropke" target="_blank">
                <SiGithub size={24} />
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
