import  {Carta} from "../carta/carta";

export enum EnumTipoMazo{
    Sprinter = "sprinter",
    Rodador = "rodador"
}

interface MazoProps {
    tipoMazo: EnumTipoMazo;
    tomarCartas: (cartasTomadas: number[]) => void;
  }

export const Mazo=({tipoMazo, tomarCartas}: MazoProps ) =>{

    const cartasSprinter = [2,2,2,3,3,3,4,4,4,5,5,5,9,9,9];
    const cartasRodador= [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];
    const cartas = tipoMazo === EnumTipoMazo.Rodador ? cartasRodador : cartasSprinter;
    
    const estilosMazo = {
      alignItems:'center',
      background:'pink',
      fontSize: '24px',
      display:'flex', 
      height:"144px",
      justifyContent:'center', 
      margin:"4px",
      cursor: 'pointer',
      width:"89px", 
    };

    const procesarTomarCartas = ()=>{
      const cartasTomadas = cartas.splice(0,3);
      
      tomarCartas(cartasTomadas);
    }

    return ( 
    <div onClick={procesarTomarCartas } style={estilosMazo}>
      <div>{tipoMazo === EnumTipoMazo.Rodador ? "R" : "S"}</div>
    </div>)


}


// export const Jugador = ({ numeroJugador }: JugadorProps) => {
//Los sprinters hay 3 de avance 2,3,4,5 y 9
//Para los rodadores  3 de avance 3,4,5,6 y 7