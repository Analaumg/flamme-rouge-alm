import { useState } from "react";
import { Jugador } from "../jugador/jugador";

interface JuegoProps {
  numeroJugadores: number;
}

enum FaseJuego{
  Tomar= "tomar",
  Seleccionar = "seleccionar",
  Descartar = "descartar",
  Revolver = "revolver",
  Inicio = "inicio"
}

export const Juego = ({ numeroJugadores }: JuegoProps) => {
  const [faseJuego,setFaseJuego] = useState <FaseJuego> (FaseJuego.Inicio);
  const jugadorActual = useState <number> (1);
  const funcionCambioFase = () =>{
    setFaseJuego(FaseJuego.Seleccionar)

   }

  return (
    <div>
      <div>Soy EL JUEGO y tengo {numeroJugadores} jugadores</div>
      <div>Fase actual: {faseJuego}</div>
      <div><button onClick={funcionCambioFase}>Ir a fase de seleccion</button></div>
      {Array.from(Array(numeroJugadores).keys()).map((jugador) => {
        return (
          <>
            <Jugador numeroJugador={jugador + 1}></Jugador>
          </>
        );
      })}
    </div>
  );
};

