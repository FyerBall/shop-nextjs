import Product from "./Product";

function Products({ products }) {
  return (
    <div className="grid gap-8  md:grid-cols-3 md:grid-rows-3">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
