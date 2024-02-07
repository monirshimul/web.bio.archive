import code from "@/public/img/codesample.png";
import Image from "next/image";
import MultiSelect from "./ui/components/MultiSelect";
import SelectsCode from "./ui/components/SelectsCode";
import ShowDynamicMenu from "./ui/components/ShowDynamicMenu";
import SelectInputBar from "./ui/components/selectInInputBar/SelectInputBar";

const page = () => {
  return (
    <div className="mx-2">
      <h1 className="bg-gray-50 rounded-lg p-5 my-2 text-neutral-400 text-xl font-bold">
        Dynamic Menu
      </h1>
      <p className="text-neutral-400 bg-gray-50 rounded-lg p-5 text-lg font-inter">
        Below Example shows a 3 layer nested menu, that was made dynamically.
      </p>

      <div className="bg-gray-50 mt-3 rounded-lg p-5 flex flex-col xl:flex-row justify-around items-center">
        <ShowDynamicMenu />
        <div>
          <Image src={code} width={550} height={250} alt="code sample" />
        </div>
      </div>
      <MultiSelect />
      <div className="flex gap-2">
        <div className="flex-1">
          <SelectsCode />
        </div>
        <div className="flex-1">
          <SelectInputBar />
        </div>
      </div>
    </div>
  );
};

export default page;
