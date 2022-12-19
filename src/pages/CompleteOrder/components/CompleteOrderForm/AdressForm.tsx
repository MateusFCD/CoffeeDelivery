import { Input } from "../../../../components/Input";
import { AdressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AdressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AdressFormContainer>
      <Input
        {...register("cep")}
        error={errors.cep?.message}
        className="cep"
        type="number"
        placeholder="CEP"
      />
      <Input
        {...register("street")}
        error={errors.street?.message}
        className="street"
        placeholder="Rua"
      />
      <Input
        {...register("number")}
        error={errors.number?.message}
        type="number"
        placeholder="Número"
      />
      <Input
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
        className="complement"
        placeholder="Complemento"
      />
      <Input
        {...register("district")}
        error={errors.district?.message}
        placeholder="Bairro"
      />
      <Input
        {...register("city")}
        error={errors.city?.message}
        placeholder="Cidade"
      />
      <Input {...register("uf")} error={errors.uf?.message} placeholder="UF" />
    </AdressFormContainer>
  );
}
