import { useEffect, useState } from "react";
import Header from "./components/Header";
import "../src/styles/home.css";
import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionAbilities from "./components/SectionAbilities";
import SectionProjects from "./components/SectionProjects";
import SectionContacts from "./components/SectionContacts";

function App() {
  const [mode, setMode] = useState("dark");
  const [menu, setMenu] = useState("closed");

  const scrollToSection = (event, sectionId, needScroll) => {
    // Previne o comportamento padrão do link de "saltar" instantaneamente

    const sectionElement = document.getElementById(sectionId);

    if (sectionElement && needScroll) {
      event.preventDefault();
      // 1. Pega a posição do topo do elemento em relação ao topo da PÁGINA
      sectionElement.scrollIntoView({
        behavior: "smooth", // Animação suave
        block: "center", // A MÁGICA: Alinha o elemento ao centro da tela
        inline: "nearest", // Comportamento de alinhamento horizontal
      });
    }
  };
  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };
  const toggleMenu = () => {
    const newMenu = menu === "open" ? "closed" : "open";
    setMenu(newMenu);
  };
  const linksHandlerFunction = (event, sectionId, needScroll) => {
    scrollToSection(event, sectionId, needScroll);
    toggleMenu();
  };
  useEffect(() => {
    document.body.className = mode;
  });

  return (
    <>
      <Header
        mode={mode}
        toggleMode={toggleMode}
        menu={menu}
        linksFunction={linksHandlerFunction}
      ></Header>
      <SectionHome></SectionHome>
      <SectionAbout></SectionAbout>
      <SectionAbilities></SectionAbilities>
      <SectionProjects></SectionProjects>
      <SectionContacts></SectionContacts>
    </>
  );
}
export default App;
