export const ProductTitle = ({ children }) => {
  return <h1 className="text-gray-700 font-semibold text-lg ">{children}</h1>;
};

export const ProductDescription = ({ children, classes }) => {
  return <p className={`mt-2 text-gray-600 text-sm  ${classes}`}>{children}</p>;
};
