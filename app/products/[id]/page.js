import ProductDetails from "@/component/ProductDetails";
import data from "@/data.json";

export default function Home({ params }) {
  const productData = data.products.find((item) => item.id == params.id);
  // console.log({ productData });

  return (
    <>
      <ProductDetails product={productData}/>
    </>
  );
}
