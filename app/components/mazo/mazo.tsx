import  {Carta} from "../carta/carta";

export enum EnumTipoMazo{
    Sprinter = "sprinter",
    Rodador = "rodador"
}

interface MazoProps {
    tipoMazo: EnumTipoMazo;
  }

export const Mazo=({tipoMazo}: MazoProps ) =>{

    const cartasSprinter = [2,2,2,3,3,3,4,4,4,5,5,5,9,9,9];
    const cartasRodador= [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];
    const cartas = tipoMazo === EnumTipoMazo.Rodador ? cartasRodador : cartasSprinter;
    return <div>Soy un mazo de tipo {tipoMazo} y estas son mis cartas 
     {cartas.map((carta) => {
        return (
          <>
            <Carta tipoCarta={tipoMazo} valorCarta={carta}></Carta>
          </>
        );
      })}
    </div>
}


// export const Jugador = ({ numeroJugador }: JugadorProps) => {
//Los sprinters hay 3 de avance 2,3,4,5 y 9
//Para los rodadores  3 de avance 3,4,5,6 y 7