import Header from "@/component/Header";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LWS Shop Center",
  description: "LWS Shop Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={"Loading..."}>
          <Header />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
