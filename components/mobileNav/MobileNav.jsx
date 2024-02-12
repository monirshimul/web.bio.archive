import { AiOutlineClose } from "react-icons/ai";
import { navItems } from "../data";
// import { navItems } from "../section/forTailwind/utils/allData";
import SingleNavItem from "./SingleNavItem";
const MobileNav = ({ closeSideMenu }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full min-h-screen w-full justify-end bg-gray-800/60 md:hidden">
      <div className=" h-full w-[65%] bg-gradient-to-tr from-cyan-800 to-slate-800 z-50 px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-gray-400"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
};

export default MobileNav;
