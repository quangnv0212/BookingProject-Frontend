import React from "react";
import { Link } from "react-router-dom";
import AuthenticationLayout from "./AuthenticationLayout";
const LoginPage = () => {
  return (
    <AuthenticationLayout heading="Đăng nhập">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Có tài khoản chưa? Chưa có thì vào
        <Link to="/register" className="underline font-bold text-primary mx-1">
          ĐĂNG KÝ
        </Link>
      </p>
    </AuthenticationLayout>
  );
};

export default LoginPage;
