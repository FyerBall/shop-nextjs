import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

export default function Home({ products }) {
  return (
    <div className="text-gray-500 max-w-7xl mx-auto">
      <Head>
        <title>Your favorite online store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" ">
        <Products products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return { props: { products: data } };
}
