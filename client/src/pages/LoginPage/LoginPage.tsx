import CustomInput from "components/CustomInput";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "store/storeContext";
import { LoginCredentialsI } from "types";
import { loginRequest } from "api/authApi";
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

const LoginPage: React.FC = () => {
  const history = useHistory();
  const { authStore } = useStoreContext();

  const { errors, register, handleSubmit } = useForm<LoginCredentialsI>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const resData = await loginRequest(data);

    if (resData) {
      authStore.setAuth(resData.isAuthenticated);
      history.push("/create");
    }
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
