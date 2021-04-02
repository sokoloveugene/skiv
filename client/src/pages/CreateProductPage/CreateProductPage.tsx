import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { OptionI } from "types";
import CustomInput from "components/CustomInput";
import CustomFileInput from "components/CustomFileInput";
import CustomSelect from "components/CustomSelect";
import Button from "components/Button";
import * as yup from "yup";
import { ReactComponent as Close } from "assets/icons/Close.svg";
import * as s from "./CreateProductPage.styled";

const testOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const schema = yup.object().shape({});

type FormValues = {
  productName: string;
  price: string;
  amount: string;
  category: OptionI;
  composition: string;
  measurements: string;
  images: File[];
  sizeTitle: string;
  sizeAmount: number;
};

interface Size {
  key: string;
  title: string;
  available: number;
}

const CreateProductPage: React.FC = () => {
  const [sizeOptions, setSizeOptions] = useState<Size[]>([]);
  // const [compositionOptions, setCompositionOptions] = useState<string[]>([]);

  const {
    setValue,
    getValues,
    errors,
    register,
    handleSubmit,
    control,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const addSizeOption = (): void => {
    const key = uuidv4();
    const { sizeTitle, sizeAmount } = getValues();
    if (!sizeTitle || !sizeAmount) return;
    const title = sizeTitle;
    const available = sizeAmount;
    setSizeOptions((p) => [...p, { title, available, key }]);
    setValue("sizeTitle", undefined);
    setValue("sizeAmount", undefined);
  };

  const removeSizeOption = (key: string) => {
    setSizeOptions((p) => p.filter((option) => option.key !== key));
  };

  const onSubmit = handleSubmit((data) => {
    if (!sizeOptions.length) return;
    console.log(data);
    console.log(
      sizeOptions.map((opt) => ({
        title: opt.title,
        available: Number(opt.available),
      }))
    );
    // TODO call api
  });

  return (
    <s.GridForm onSubmit={onSubmit}>
      <div style={{ gridArea: "productName" }}>
        <CustomInput
          label="Найменування"
          name="productName"
          ref={register}
          errorMessage={errors.productName?.message}
        />
      </div>

      <div style={{ gridArea: "price" }}>
        <CustomInput
          type="number"
          label="Ціна"
          name="price"
          ref={register}
          errorMessage={errors.price?.message}
        />
      </div>

      <div style={{ gridArea: "upload" }}>
        <Controller
          name="images"
          control={control}
          render={({ onChange }) => <CustomFileInput onChange={onChange} />}
        />
      </div>

      <div style={{ gridArea: "category" }}>
        <Controller
          name="category"
          control={control}
          render={({ onChange, value }) => (
            <CustomSelect
              selectedValue={value}
              placeholder="test"
              options={testOptions}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div style={{ gridArea: "sizeSelector" }}>
        <s.CreateSize>
          <CustomInput
            mask="upperCase"
            label="Введіть розмір"
            name="sizeTitle"
            ref={register}
            errorMessage={errors.sizeTitle?.message}
          />
          <CustomInput
            type="number"
            label="Кількість"
            name="sizeAmount"
            ref={register}
            errorMessage={errors.sizeAmount?.message}
          />
          <Button
            customPadding="0px 57px"
            title="Додати"
            onClick={addSizeOption}
          />
        </s.CreateSize>
        {sizeOptions.map((option) => (
          <s.SizeOption key={option.key}>
            {`${option.title} - ${option.available}шт`}
            <s.CloseButton
              role="button"
              onClick={() => removeSizeOption(option.key)}
            >
              <Close />
            </s.CloseButton>
          </s.SizeOption>
        ))}
      </div>

      <div style={{ gridArea: "composition" }}>
        <CustomInput
          label="Склад та догляд"
          name="composition"
          ref={register}
          errorMessage={errors.composition?.message}
        />
      </div>

      <div style={{ gridArea: "measurements" }}>
        <CustomInput
          label="Обміри виробу"
          name="measurements"
          ref={register}
          errorMessage={errors.measurements?.message}
        />
      </div>

      <s.Controls style={{ gridArea: "controls" }}>
        <Button title="Видалити" onClick={reset} inversion />
        <Button title="Створити товар" onClick={onSubmit} />
      </s.Controls>
    </s.GridForm>
  );
};

export default CreateProductPage;
