import * as yup from "yup";

const requiredErrorMessage = "This field is required";
const phoneError = "Phone number is not valid";
const emailError = "Email is not valid";

// eslint-disable-next-line
export const schema = yup.object().shape({
  firstName: yup.string().required(requiredErrorMessage),
  lastName: yup.string().required(requiredErrorMessage),
  address: yup.string().required(requiredErrorMessage),
  phoneNumber: yup
    .string()
    .required(requiredErrorMessage)
    .matches(/\+380\d{9}/, phoneError),
  email: yup.string().email(emailError).required(requiredErrorMessage),
  mailing: yup.bool(),
  callBack: yup.bool(),
});
