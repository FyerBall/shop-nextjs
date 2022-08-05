import React, { forwardRef } from "react";
import { cls } from "../utils/cls.js";

const classes = {
  base: "focus:outline-none transition ease-in-out duration-300 rounded",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-4 py-2",
    large: "px-8 py-3 text-lg",
  },
  variant: {
    primary:
      "bg-white hover:bg-alpha hover:text-white focus:ring-2 focus:ring-alpha focus:ring-opacity-50 text-alpha border border-beta font-bold",
    secondary:
      "bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
};

const Button = forwardRef(
  (
    {
      children,
      type = "button",
      className,
      variant = "primary",
      size = "normal",
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      {...props}
      className={cls(`
    ${classes.base}
    ${classes.size[size]}
    ${classes.variant[variant]}
    ${className}
    `)}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
