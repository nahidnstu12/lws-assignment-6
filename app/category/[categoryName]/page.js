import Category from "@/component/Category";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Subscribe from "@/component/Subscribe";
import data from "@/data.json";

export default function Home({ params }) {
  const productData = data.products.filter((item) => {
    if (params.categoryName === "all") {
      return true;
    }
    return item.category == params.categoryName;
  });
  return (
    <>
      <Hero />
      <Category category={params.categoryName} data={productData} />
      <Subscribe />
      <Footer />
    </>
  );
}
