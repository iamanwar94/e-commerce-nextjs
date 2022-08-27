import * as yup from "yup";

export const signUpSchema = yup.object({
  firstName: yup.string().min(3).required("Please Enter Your First Name"),
  lastName: yup.string().min(3).required("Please Enter Your Last Name"),
  email: yup.string().email().required("Please Enter Email Address"),
  phone: yup
    .string()
    .phone()
    .positive()
    .integer()
    .required("Please Enter Phone"),
  password: yup.string.min(8).required("Please Enter Your Password"),
  c_password: yup.string
    .required()
    .oneOf([yup.ref("password"), null, "Password must match"]),
});
export const loginSchema = yup.object({});
export const trackingSchema = yup.object({});
