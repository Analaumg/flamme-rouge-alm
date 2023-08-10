import { EnumTipoMazo } from "../mazo/mazo";

interface CartaProps {
  tipoCarta: EnumTipoMazo;
  valorCarta: number;
}

export const Carta = ({ tipoCarta, valorCarta }: CartaProps) => {
  return (
    <div>
      Soy una carta de tipo {tipoCarta} y mi valor es {valorCarta}
    </div>
  );
};
