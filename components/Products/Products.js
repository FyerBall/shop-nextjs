import Product from "./Product";

function Products({ products }) {
  return (
    // getting products from server
    <div className="grid gap-8  md:grid-cols-3 md:grid-rows-3">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
