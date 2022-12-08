import { PaymentMethodInput } from "../PaymentMethodInput";
import { MethodPaymentOptionsContainer } from "./styles";

export function PaymentMethodOptions() {
  return (
    <MethodPaymentOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </MethodPaymentOptionsContainer>
  );
}
