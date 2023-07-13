import { Mazo,EnumTipoMazo } from "../mazo/mazo";

interface JugadorProps {
  numeroJugador: number;
}

export const Jugador = ({ numeroJugador }: JugadorProps) => {
  return (
    <div>
      <div>Soy el jugador numero {numeroJugador} y tengo </div>
      <Mazo tipoMazo={EnumTipoMazo.Sprinter}></Mazo>
      <Mazo tipoMazo={EnumTipoMazo.Rodador}></Mazo>
    </div>
  );
};


// <>
// <Jugador numeroJugador={jugador + 1}></Jugador>
// </>