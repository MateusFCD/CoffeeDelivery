import { Input } from "../../../../components/Input";
import { AdressFormContainer } from "./styles";

export function AdressForm() {
  return (
    <AdressFormContainer>
      <Input className="cep" type="number" placeholder="CEP" />
      <Input className="street" placeholder="Rua" />
      <Input type="number" placeholder="Número" />
      <Input className="complement" placeholder="Complemento" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AdressFormContainer>
  );
}
