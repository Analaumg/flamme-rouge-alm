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
  const [jugadorActual] = useState <number> (1);

 
  return (
    <div>
      <div>Soy EL JUEGO y tengo {numeroJugadores} jugadores</div>
      <div>Jugador actual: {jugadorActual} </div>
      <Jugador numeroJugador={jugadorActual}></Jugador>


      {/*Array.from(Array(numeroJugadores).keys()).map((jugador) => {
        return (
          <>
          </>
        );
      })*/}
    </div>
  );
};

