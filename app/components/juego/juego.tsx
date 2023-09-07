import { useState } from "react";
import { Jugador } from "../jugador/jugador";

interface JuegoProps {
  numeroJugadores: number;
}

export enum FaseJuego{
  Tomar= "tomar",
  Seleccionar = "seleccionar",
  Descartar = "descartar",
  Revolver = "revolver",
  Inicio = "inicio"
}

export const Juego = ({ numeroJugadores }: JuegoProps) => {
  const [faseJuego,setFaseJuego] = useState <FaseJuego> (FaseJuego.Inicio);
  const [jugadorActual] = useState <number> (2);
  const funcionCambioFase = () =>{
    setFaseJuego(FaseJuego.Tomar)

   }

  return (
    <div>
      <div>Soy EL JUEGO y tengo {numeroJugadores} jugadores</div>
      <div>Fase actual: {faseJuego}</div>
      <div><button onClick={funcionCambioFase}>Ir a fase de tomar</button></div>
      <div>Jugador actual: {jugadorActual} </div>
      <Jugador numeroJugador={jugadorActual} faseJuego={faseJuego}></Jugador>


      {/*Array.from(Array(numeroJugadores).keys()).map((jugador) => {
        return (
          <>
          </>
        );
      })*/}
    </div>
  );
};

