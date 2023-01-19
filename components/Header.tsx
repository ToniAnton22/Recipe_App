import Image from "next/image";
import Link from "next/link";
import {ArrowLeftOnRectangleIcon} from "@heroicons/react/24/outline";

function Header() {
  return (
    <nav className=" bg-orange-300 flex justify-between border-b-2 border-t-2 border-x-orange-800 fix top-0 left-0 right-0 p-2 mt-5 rounded-lg shadow-md">
      <Link href="/">
        <Image
          alt="logo"
          layout="fixed"
          src="/img/logo.png"
          width={102}
          height={46}
          className="cursor-pointer"
        ></Image>
      </Link>
      <div className="flex space-x-2 cursor-pointer mt-2">
        <ArrowLeftOnRectangleIcon className="h-8 w-8 mt-0.5" />
        <h4 className="text-gray-500">Log out</h4>
      </div>
    </nav>
  );
}

export default Header;
