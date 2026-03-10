import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Accedemos a la ubicación actual de la ruta
    const { pathname } = useLocation();

    useEffect(() => {
    // Cada vez que el pathname cambie, movemos el scroll al inicio (0,0)
    window.scrollTo(0, 0);
    }, [pathname]);

  return null; // Este componente no renderiza nada visualmente
};

export default ScrollToTop;