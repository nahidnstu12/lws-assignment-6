import Hero from "@/component/Hero";
import Products from "@/component/Products";
import Subscribe from "@/component/Subscribe";
import data from "../data.json";
import Footer from "@/component/Footer";

export default function Home() {
  console.log("json data", data.products[0]);
  return (
    <>
      <Hero />
      <Products />
      <Subscribe />
      <Footer />
    </>
  );
}
