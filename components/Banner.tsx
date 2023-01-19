import Image from "next/image";

function Banner() {
  return (
    <nav className=" bg-orange-300 flex justify-center border-b-2 border-t-2 border-x-orange-800 fix top-0 left-0 right-0 p-2 mt-5 rounded-lg shadow-md ">
      <Image
        alt="food1.jpeg"
        layout="fixed"
        bg-fixed
        src="/img/food1.jpeg"
        width={800}
        height={500}
        className="object-cover mx-auto "
      ></Image>
    </nav>
  );
}

export default Banner;
