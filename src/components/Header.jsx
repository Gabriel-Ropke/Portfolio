import { useState } from "react";
import "../styles/header.css";
import { HiMenu, HiMoon, HiSun, HiX } from "react-icons/hi";

function Header({ mode, toggleMode, menu, linksFunction }) {
  return (
    <header>
      <span className="logo">
        Froga<span className="orangeDev">Dev</span>
      </span>
      <nav className={menu}>
        <ul>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                linksFunction(e, "home", false);
              }}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                linksFunction(e, "about", true);
              }}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#abilities"
              onClick={(e) => {
                linksFunction(e, "abilities", true);
              }}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                linksFunction(e, "projects", false);
              }}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={(e) => {
                linksFunction(e, "contacts", true);
              }}
            >
              Contato
            </a>
          </li>
        </ul>
        {window.innerWidth <= 700 ? (
          <HiX className="closeButton" size={24} onClick={linksFunction} />
        ) : null}
      </nav>
      <div className="iconContainer">
        {mode === "dark" ? (
          <HiMoon size={28} onClick={toggleMode} />
        ) : (
          <HiSun size={28} onClick={toggleMode} />
        )}
        {window.innerWidth <= 700 ? (
          <HiMenu size={28} onClick={linksFunction} />
        ) : null}
      </div>
    </header>
  );
}
export default Header;
