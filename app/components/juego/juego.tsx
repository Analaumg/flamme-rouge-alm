import { Jugador } from "../jugador/jugador";

interface JuegoProps {
  numeroJugadores: number;
}

export const Juego = ({ numeroJugadores }: JuegoProps) => {
  return (
    <div>
      Soy EL JUEGO y tengo {numeroJugadores} jugadores
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
