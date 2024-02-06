import code from "@/public/img/codesample.png";
import Image from "next/image";
import ShowDynamicMenu from "./ui/components/ShowDynamicMenu";

const page = () => {
  return (
    <div className="mx-2">
      <h1 className="bg-gray-50 rounded-lg p-5 my-2 text-neutral-600 text-xl font-bold">
        Dynamic Menu
      </h1>
      <p className="text-neutral-400 bg-gray-50 rounded-lg p-5">
        Below Example shows a 3 layer nested menu, that was made dynamically.
      </p>
      <ShowDynamicMenu />
      <div className="bg-gray-50 rounded-lg p-5">
        <Image src={code} width={750} height={250} alt="code sample" />
      </div>
    </div>
  );
};

export default page;
