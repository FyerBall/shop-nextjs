import Product from "./Product";

function Products({ products }) {
  return (
    <div className="flex justify-center flex-wrap  overflow-hidden">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
