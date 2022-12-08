import { CreditCard } from "phosphor-react";
import { MethodPaymentContainer } from "./styles";

export function PaymentMethodInput() {
  return (
    <MethodPaymentContainer>
      <CreditCard size={16} />
      Cartão de Crédito
    </MethodPaymentContainer>
  );
}
