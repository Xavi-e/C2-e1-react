import { useState } from "react";

function App() {
  const getPosicionAleatoria = () => ({
    top: Math.floor(Math.random() * window.innerHeight),
    left: Math.floor(Math.random() * window.innerWidth),
  });
  const [puntos, setPuntos] = useState(0);
  const [posicion, setPosicion] = useState(0);
  const cambiarPosicion = () => {
    setTimeout(() => {
      setPosicion(getPosicionAleatoria());
    }, 3000);
  };
  const aumentarPuntuacion = () => {
    setPuntos(puntos + 1);
  };
  return (
    <>
      <p>Puntos: {puntos}</p>
      <i
        className="fab fa-fly globo"
        style={{ top: posicion.top, left: posicion.left }}
        onMouseOver={cambiarPosicion()}
        onClick={aumentarPuntuacion}
      ></i>
    </>
  );
}

export default App;
