import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/lws-logo-black.svg"
              alt="Logo"
              width={120}
              height={60}
              priority
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          className="h-6 w-auto"
          src="/svg/avatar.svg"
          alt="Logo"
          width={18}
          height={18}
          priority
        />
        <Image
          className="h-6 w-auto"
          src="/svg/shopping-Cart.svg"
          alt="Logo"
          width={20}
          height={20}
          priority
        />
      </div>
    </nav>
  );
}
