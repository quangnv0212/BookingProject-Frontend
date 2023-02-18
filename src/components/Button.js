import React from "react";
const Button = ({ children, className, ...props }) => {
  return (
    <button className={`button-54 font-bold ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
