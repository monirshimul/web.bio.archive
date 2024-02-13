"use client";
import { changeCurrnetTheme } from "@/redux/features/setting/SettingSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { navItems } from "../data";
import MobileNav from "../mobileNav/MobileNav";
import NavMenu from "./NavMenu";
const MegaNav = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const data = useSelector((state) => state.themeChange.themeName);
  console.log("theme", data);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  const goCertainPage = (link) => {
    // console.log("the link", link);
    // console.log(router);
    router.refresh();
    router.push(link, { scroll: false });
  };

  return (
    <motion.div
      // variants={navVariants}
      // initial="hidden"
      // whileInView="show"
      className="flex bg-transparent backdrop-blur-lg dark:bg-transparent dark:backdrop-blur-lg p-4 z-50 sticky top-0 left-0"
    >
      {/* for logo */}
      <section
        ref={animationParent}
        className="flex justify-center sm:justify-center xl:justify-around items-center w-full flex-wrap"
      >
        <Link className="pl-5" href="/">
          {/* <Image
            className="object-fill"
            src={Sign}
            alt=""
            width={120}
            height={100}
          /> */}
          <h1 className="text-5xl px-5 py-3 transition-all hover:scale-105 font-extralight text-slate-500 dark:text-slate-300 hover:text-slate-600 font-yesteryear">
            {/* <span className="text-cyan-400 font-extrabold">Z</span>-C
            <span className="text-orange-400 font-extrabold">O</span>DER */}
            MonirShimul
          </h1>
        </Link>

        {/* for Mobile Nav */}
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        {/* navItems */}
        <nav className="hidden relative md:flex items-center gap-4 transition-all ml-16">
          {navItems.map((val, ind) => (
            <Link
              key={ind}
              href={val.link}
              className="group px-2 py-3 transition-all"
            >
              <div className="flex cursor-pointer items-center gap-2 text-neutral-400 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white">
                <span>{val.label}</span>
                {val.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}

                {/* Mega Menu ============== */}

                {val.children && (
                  <div className="z-50 absolute left-0 right-0 top-12 hidden w-fit flex-col gap-1 rounded-lg dark:border dark:border-slate-700 dark:shadow-xl bg-slate-50 dark:bg-slate-800 py-5 px-10 shadow-md  transition-all group-hover:flex group-hover:flex-row">
                    {val.children.map((ch, i) => (
                      <NavMenu key={i} properties={ch} />
                    ))}
                    {/* {val.children.map((ch, i) => (
                      <div
                        key={i}
                        onClick={() => goCertainPage(ch.link)}
                        className="flex cursor-pointer items-center py-1 pl-5 pr-3 text-neutral-400 hover:text-black"
                      >
                        {ch.iconImage && <>{ch.iconImage}</>}

                        <span className="whitespace-nowrap pl-3">
                          {ch.label}
                        </span>
                      </div>
                    ))} */}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </nav>
        <div className="sm:ml-10 lg:ml-0 xl:ml-5">
          {data === "light" ? (
            <MdOutlineDarkMode
              size={25}
              className="cursor-pointer font-bold dark:text-neutral-300 bg-gray-100 p-1 rounded-full"
              onClick={() =>
                dispatch(changeCurrnetTheme({ themeValue: "dark" }))
              }
            />
          ) : (
            <CiLight
              size={30}
              className="cursor-pointer font-extrabold dark:text-cyan-300 dark:bg-slate-700 dark:rounded-full"
              onClick={() =>
                dispatch(changeCurrnetTheme({ themeValue: "light" }))
              }
            />
          )}
        </div>
      </section>
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden dark:text-slate-300 mt-5"
      />
      {/* for navmenu */}
      {/* <section className="flex justify-center space-x-5 items-center">
        <div className="flex relative cursor-pointer items-center gap-2 text-neutral-400 hover:text-black group">
          <span>Theme</span>
          <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
          <div className="z-50 absolute left-0 right-0 top-6 hidden w-fit flex-col gap-1 rounded-lg bg-slate-50 py-5 px-10 shadow-md  transition-all group-hover:flex group-hover:flex-row">
            <MultipleTheme />
          </div>
        </div>
        <h5>Drak - Light</h5>
      </section> */}
    </motion.div>
  );
};

export default MegaNav;
