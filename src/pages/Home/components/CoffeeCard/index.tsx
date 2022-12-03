import { ShoppingCart } from "phosphor-react";
import { Card } from "./styles";
import CoffeeTradicional from "../../../../assets/Type=Expresso.png";

export function CoffeeCard() {
  return (
    <Card>
      <img src={CoffeeTradicional} alt="" />
      <h3>Tradicional</h3>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div>
        <span>R$ 9,90</span>
        <span> - 1 +</span>
        <ShoppingCart size={24} weight="fill" />
      </div>
    </Card>
  );
}
