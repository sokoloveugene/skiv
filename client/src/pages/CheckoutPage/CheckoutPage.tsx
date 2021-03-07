import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { normalizeOptionType } from "helpers/normalize";
import { useCameFromProtect } from "hooks/useCameFromProtect";
import CustomInput from "components/CustomInput";
import CustomCheckbox from "components/CustomCheckbox";
import { schema } from "./validationSchema";
import * as s from "./CheckoutPage.styled";

type FormValues = {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  mailing: boolean;
  callBack: boolean;
};

const inputFiels: Array<{
  label: string;
  name: string;
  mask?: normalizeOptionType;
}> = [
  {
    label: "Ім’я",
    name: "firstName",
    mask: "onlyLetters",
  },
  {
    label: "Прізвище",
    name: "lastName",
    mask: "onlyLetters",
  },
  {
    label: "Місто, адреса, віділення Нової Пошти",
    name: "address",
  },
  {
    label: "+380",
    name: "phoneNumber",
    mask: "phone",
  },
  {
    label: " Електронна пошта",
    name: "email",
  },
];

const CheckoutPage: React.FC = () => {
  useCameFromProtect("fromCart", "/cart");

  const { register, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <s.InputsGridLayout>
        {inputFiels.map((field) => (
          <div key={field.name} style={{ gridArea: field.name }}>
            <CustomInput
              mask={field.mask}
              label={field.label}
              name={field.name}
              ref={register}
            />
          </div>
        ))}
      </s.InputsGridLayout>

      <CustomCheckbox
        title="Підписатися на нашу розсилку"
        name="mailing"
        ref={register}
        customMargin="37px 0px 20px 0px"
      />
      <CustomCheckbox
        title="Передзвоніть мені для уточнення замовлення"
        name="callBack"
        ref={register}
      />
    </form>
  );
};

export default CheckoutPage;
