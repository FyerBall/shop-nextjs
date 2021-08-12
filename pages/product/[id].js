import SingleProduct from "../../components/Products/SingleProduct";

function ProductDetails({ details }) {
  return (
    <div className="m-4 md:mt-40">
      <SingleProduct details={details} />
    </div>
  );
}

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      details: data,
    },
  };
};
