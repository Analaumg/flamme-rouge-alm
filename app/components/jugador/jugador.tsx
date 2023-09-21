import { FaseJuego } from "../juego/juego";
import { Mazo,EnumTipoMazo } from "../mazo/mazo";

interface JugadorProps {
  numeroJugador: number;
  faseJuego: FaseJuego;
}

export const Jugador = ({ numeroJugador,faseJuego }: JugadorProps) => {

  const estilosContenedorMazos = {
    display: 'flex',
  }

  return (
    <div>
      <div>Soy el jugador numero {numeroJugador} y tengo </div>
      {faseJuego===FaseJuego.Tomar &&
       <div style={estilosContenedorMazos}> 
          <Mazo tipoMazo={EnumTipoMazo.Sprinter}></Mazo>
          <Mazo tipoMazo={EnumTipoMazo.Rodador}></Mazo>
        </div>
        }
    </div>
  );
};


// <>
// <Jugador numeroJugador={jugador + 1}></Jugador>
// <Mazo tipoMazo={EnumTipoMazo.Sprinter}></Mazo>
// <Mazo tipoMazo={EnumTipoMazo.Rodador}></Mazo>
// </>