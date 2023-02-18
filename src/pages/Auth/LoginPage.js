import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import Field from "../../components/Form/Field";
import Input from "../../components/Form/Input";
import InputPasswordToggle from "../../components/Form/InputPasswordTogggle";
import Label from "../../components/Form/Label";
import AuthenticationLayout from "./AuthenticationLayout";
import { toast } from "react-toastify";
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});
const LoginPage = () => {
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
  }, [errors]);
  const handleLogin = (values) => {
    console.log(values);
  };
  return (
    <AuthenticationLayout heading="Đăng nhập">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Có tài khoản chưa? Chưa có thì vào
        <Link to="/register" className="underline font-bold text-primary mx-1">
          ĐĂNG KÝ
        </Link>
      </p>
      <form
        className="form"
        onSubmit={handleSubmit(handleLogin)}
        // autoComplete="off"
      >
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

export default LoginPage;
