import CustomInput from "components/CustomInput";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/Button";
import * as yup from "yup";
import * as s from "./LoginPage.styled";

const requiredErrorMessage = "This field is required";
const emailError = "Email is not valid";
const passLength = "Min length 8 symbols";

const schema = yup.object().shape({
  email: yup.string().email(emailError).required(requiredErrorMessage),
  password: yup.string().required(requiredErrorMessage).min(8, passLength),
});

type FormValues = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { errors, register, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // TODO call api
  });

  return (
    <s.Form onSubmit={onSubmit}>
      <s.Container>
        <CustomInput
          label="Email"
          name="email"
          ref={register}
          errorMessage={errors.email?.message}
        />
        <CustomInput
          type="password"
          label="Password"
          name="password"
          ref={register}
          errorMessage={errors.password?.message}
        />
      </s.Container>
      <Button
        customMargin="38px auto"
        customPadding="17px 128px"
        title="Увійти"
        onClick={onSubmit}
      />
    </s.Form>
  );
};

export default LoginPage;
