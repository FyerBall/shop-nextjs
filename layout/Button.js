// reusable anc customizable button
function Button({
  textSize,
  textColor,
  borderColor,
  bgColor,
  children,
  classes,
  ...rest
}) {
  return (
    <button
      type="button"
      className={`text-${textSize || "lg"} bg-${
        bgColor || "gray"
      }-100 py-0 px-3 rounded-md border border-${
        borderColor || "blue"
      }-500 shadow-xl capitalize my-5 text-${
        textColor || "blue"
      }-700 tracking-wider mx-1 transition duration-500 ease-in-out hover:text-gray-100 ${classes} hover:bg-blue-800  md:mx-3 `}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
