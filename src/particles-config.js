const particlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: -1, // Coloca no fundo
  },
  particles: {
    number: {
      value: 100, // Número de partículas
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff9800", // Cor laranja
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.1, max: 0.5 }, // Opacidade varia
    },
    size: {
      value: { min: 1, max: 3 }, // Tamanho varia
    },
    move: {
      enable: true,
      speed: 0.5, // Velocidade lenta
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false, // Sem interação com o mouse
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  detectRetina: true,
};

export default particlesConfig;
