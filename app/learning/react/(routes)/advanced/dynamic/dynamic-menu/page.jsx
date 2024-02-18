import code from "@/public/img/codesample.png";
import Image from "next/image";
import ShowDynamicMenu from "../ui/components/ShowDynamicMenu";
const page = () => {
  return (
    <div>
      <h1 className="bg-gray-50 dark:bg-slate-700/40 rounded-lg p-5 my-2 text-neutral-400 dark:text-slate-300 text-xl font-bold">
        Dynamic Menu
      </h1>
      <p className="text-neutral-400 bg-gray-50 dark:bg-slate-700/40 dark:text-slate-300 rounded-lg p-5 text-lg font-inter">
        Below Example shows a 3 layer nested menu, that was made dynamically.
      </p>

      <div className="bg-gray-50 dark:bg-slate-700/40 dark:text-slate-300 mt-3 rounded-lg p-5 flex flex-col xl:flex-row justify-around items-center">
        <ShowDynamicMenu />
        <div>
          <Image src={code} width={550} height={250} alt="code sample" />
        </div>
      </div>
    </div>
  );
};

export default page;
