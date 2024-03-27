"use client";
import { usePathname, useRouter } from "next/navigation";
const routes = [
  "All",
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
];
export default function CategoryLink() {
  const router = useRouter();
  const pathname = usePathname();
  console.log("pathname", pathname.split("/")[2]);
  return routes.map((route) => (
    <button
      onClick={() => router.push(`/category/${route.toLocaleLowerCase()}`)}
      key={route}
      className={`hover:border-b border-black block h-6 box-border mt-4 ${
        pathname.split("/")[2] === route.toLocaleLowerCase()
          ? "text-blue-500 font-semibold"
          : ""
      }`}
    >
      {route}
    </button>
  ));
}
