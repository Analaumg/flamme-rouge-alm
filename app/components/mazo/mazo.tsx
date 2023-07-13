export enum EnumTipoMazo{
    Sprinter = "sprinter",
    Rodador = "rodador"
}

interface MazoProps {
    tipoMazo: EnumTipoMazo;
  }

export const Mazo=({tipoMazo}: MazoProps ) =>{
    return <div>Soy un mazo de tipo {tipoMazo}</div>
}


// export const Jugador = ({ numeroJugador }: JugadorProps) => {
