import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreContext } from "store/storeContext";
import { normalizeOptionType } from "helpers/normalize";
import { useCameFromProtect } from "hooks/useCameFromProtect";
import Button from "components/Button";
import CustomInput from "components/CustomInput";
import CustomCheckbox from "components/CustomCheckbox";
import CheckoutItem from "components/CheckoutItem";
import { Divider } from "ui/ui.styled";
import { schema } from "./validationSchema";
import * as s from "./CheckoutPage.styled";

type FormValues = {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  mailing: boolean;
  callMeBack: boolean;
  delivery: "address delivery" | "nova poshta";
  payment: "card" | "payment on delivery";
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

const CheckoutPage: React.FC = observer(() => {
  const history = useHistory();

  const { cartStore } = useStoreContext();
  useCameFromProtect("fromCart", "/cart");

  useEffect(() => {
    if (cartStore.cartData.length) return;

    history.push("/cart");
  }, [cartStore.cartData, history]);

  const { errors, register, handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // TODO call api clear cartData
  });

  return (
    <s.FormWrapper onSubmit={onSubmit}>
      <s.Left>
        <s.InputsGridLayout>
          {inputFiels.map((field) => (
            <div key={field.name} style={{ gridArea: field.name }}>
              
              <Controller
                name={field.name}
                control={control}
                render={({ value, onChange }) => (
                  <CustomInput
                    value={value}
                    onChange={onChange}
                    mask={field.mask}
                    label={field.label}
                    errorMessage={
                      errors[field.name as keyof FormValues]?.message
                    }
                  />
                )}
              />
            </div>
          ))}
        </s.InputsGridLayout>

        <CustomCheckbox
          type="checkbox"
          title="Підписатися на нашу розсилку"
          name="mailing"
          ref={register}
          customMargin="37px 0px 20px 0px"
        />
        <CustomCheckbox
          type="checkbox"
          title="Передзвоніть мені для уточнення замовлення"
          name="callMeBack"
          ref={register}
        />
      </s.Left>
      <s.Right>
        <s.RightTitle>ТОВАР</s.RightTitle>
        <s.CheckoutItemContainer>
          {cartStore.cartData.map((item) => (
            <CheckoutItem key={item._id} product={item} />
          ))}
        </s.CheckoutItemContainer>

        <Divider customMargin="0px 0px 17px 0px" />

        <s.RadioGroup>
          <s.RadioTitle>ДОСТАВКА</s.RadioTitle>
          <div>
            <CustomCheckbox
              small
              type="radio"
              title="Нова пошта - на відділення"
              name="delivery"
              ref={register}
              value="nova poshta"
            />
            <CustomCheckbox
              small
              type="radio"
              title="Кур'єрська доставка"
              name="delivery"
              ref={register}
              value="address delivery"
            />
          </div>
        </s.RadioGroup>
        <Divider customMargin="20px 0px 17px 0px" />

        <s.RadioGroup>
          <s.RadioTitle>ОПЛАТА</s.RadioTitle>
          <div>
            <CustomCheckbox
              small
              type="radio"
              title="Оплата на карту"
              name="payment"
              ref={register}
              value="card"
            />
            <CustomCheckbox
              small
              type="radio"
              title="Накладений платіж"
              name="payment"
              ref={register}
              value="payment on delivery"
            />
          </div>
        </s.RadioGroup>

        <Button
          customMargin="20px auto 0px auto"
          customPadding="17px"
          title="Підтвердити замовлення"
          onClick={onSubmit}
        />
      </s.Right>
    </s.FormWrapper>
  );
});

export default CheckoutPage;
