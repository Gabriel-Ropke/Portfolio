import { useState, useLayoutEffect } from "react";

const useScrollOverflow = (ref) => {
  const [overflowState, setOverflowState] = useState({
    isOverflowingTop: false,
    isOverflowingBottom: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkOverflow = () => {
      // Verifica se há conteúdo para rolar para cima
      const isTop = element.scrollTop > 0;

      // Verifica se há conteúdo para rolar para baixo
      // Usamos Math.round para evitar problemas com valores decimais de pixels
      const isBottom =
        Math.round(element.scrollTop + element.clientHeight) <
        element.scrollHeight;

      setOverflowState({
        isOverflowingTop: isTop,
        isOverflowingBottom: isBottom,
      });
    };

    // Agora, além de verificar no 'resize', também precisamos verificar no 'scroll' DO PRÓPRIO ELEMENTO
    element.addEventListener("scroll", checkOverflow);
    window.addEventListener("resize", checkOverflow);

    // Roda uma vez no início para definir o estado inicial
    checkOverflow();

    // Limpeza: remove ambos os "escutadores"
    return () => {
      element.removeEventListener("scroll", checkOverflow);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [ref]); // Roda apenas quando a ref é montada

  return overflowState;
};

export default useScrollOverflow;
