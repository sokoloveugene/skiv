import CustomInput from "components/CustomInput";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { OptionI } from "types";
import CustomFileInput from "components/CustomFileInput";
import CustomSelect from "components/CustomSelect";
import SelectSize from "components/SelectSize";
import Button from "components/Button";
import * as yup from "yup";
import * as s from "./CreateProductPage.styled";

const testSizes = [
  {
    _id: "1",
    title: "XS",
    available: 3,
  },
  {
    _id: "2",
    title: "S",
    available: 3,
  },
  {
    _id: "3",
    title: "M",
    available: 3,
  },
  {
    _id: "4",
    title: "L",
    available: 3,
  },
];

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
};

const CreateProductPage: React.FC = () => {
  const {
    errors,
    register,
    handleSubmit,
    control,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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

      <div style={{ gridArea: "amount" }}>
        <CustomInput
          label="Кількість"
          name="amount"
          ref={register}
          errorMessage={errors.amount?.message}
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
        <SelectSize
          options={testSizes}
          selectedOption={null}
          setSelectedOption={() => null}
        />
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
