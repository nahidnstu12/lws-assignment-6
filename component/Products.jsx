import Link from "next/link";
import data from "../data.json";
import Product from "./Product";

export default function Products() {
  return (
    <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
        {data.products.slice(0, 12).map((product) => (
          <Link key={product?.id} href={`/products/${product.id}`}>
            <Product product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}
