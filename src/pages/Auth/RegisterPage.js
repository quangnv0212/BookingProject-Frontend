import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthenticationLayout from "./AuthenticationLayout";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import InputPasswordToggle from "../../components/Form/InputPasswordTogggle";
import Label from "../../components/Form/Label";
import Field from "../../components/Form/Field";
import Input from "../../components/Form/Input";
const schema = yup.object({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your password must be at least 8 characters or greater"),
  passwordConfirm: yup.string().required("Please enter your password confirm"),
});
const RegisterPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
    console.log(errors);
  }, [errors]);
  const handleLogin = (values) => {
    console.log(values);
  };
  return (
    <AuthenticationLayout heading="Đăng ký">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Bạn đã có tài khoản? Hãy click vào trang
        <Link to="/login" className="underline font-bold text-primary mx-1">
          ĐĂNG NHẬP
        </Link>
      </p>
      <form
        className="form"
        onSubmit={handleSubmit(handleLogin)}
        // autoComplete="off"
      >
        <Field>
          <Label htmlFor="firstName">Fist Name</Label>
          <Input
            name="firstName"
            placeholder="Enter your first name"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            name="lastName"
            placeholder="Enter your last name"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPasswordToggle control={control}></InputPasswordToggle>
        </Field>
        <Field>
          <Label htmlFor="passwordConfirm">Password Confirm</Label>
          <InputPasswordToggle
            control={control}
            name="passwordConfirm"
          ></InputPasswordToggle>
        </Field>
        <div className="have-account">
          Bạn chưa có tài khoản?{" "}
          <NavLink to={"/register"}>Đăng ký tài khoản</NavLink>{" "}
        </div>
        <Button type="submit" className="w-full max-w-[300px] mx-auto">
          Login
        </Button>
      </form>
    </AuthenticationLayout>
  );
};

export default RegisterPage;
