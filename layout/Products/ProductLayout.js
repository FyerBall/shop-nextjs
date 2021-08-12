export const ProductTitle = ({ children }) => {
  return <h1 className="text-gray-900 font-bold text-xl">{children}</h1>;
};

export const ProductDescription = ({ children }) => {
  return <p className="mt-2 text-gray-600 text-sm">{children}</p>;
};
