import { useState } from "react";
import { FaseJuego } from "../juego/juego";
import { Mazo, EnumTipoMazo } from "../mazo/mazo";
import { Mano } from '../mano/mano'

interface JugadorProps {
  numeroJugador: number;
}

export const Jugador = ({ numeroJugador }: JugadorProps) => {
  const [faseJuego, setFaseJuego] = useState<FaseJuego>(FaseJuego.Inicio);

  const funcionCambioFase = () => {
    setFaseJuego(FaseJuego.Tomar)

  }

  const estilosContenedorMazos = {
    display: 'flex',
  }

  const tomarCartas = (cartasTomadas: number[]) => {
    console.log("Tomaste las siguiente cartas: ", cartasTomadas)
    setFaseJuego(FaseJuego.Seleccionar)
  }

  return (
    <div>
      <div>Soy el jugador numero {numeroJugador}  </div>
      <div>Fase actual: {faseJuego}</div>
      <div><button onClick={funcionCambioFase}>Ir a fase de tomar</button></div>

      {faseJuego === FaseJuego.Tomar &&
        <div style={estilosContenedorMazos}>
          <Mazo tomarCartas={tomarCartas} tipoMazo={EnumTipoMazo.Sprinter} />
          <Mazo tomarCartas={tomarCartas} tipoMazo={EnumTipoMazo.Rodador}></Mazo>
        </div>
      }
      {faseJuego === FaseJuego.Seleccionar &&
        <div>
          <Mano />
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