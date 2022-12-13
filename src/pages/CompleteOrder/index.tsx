import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffes } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffes />
    </CompleteOrderContainer>
  );
}
