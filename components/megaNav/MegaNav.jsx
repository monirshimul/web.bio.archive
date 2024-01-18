"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { navItems } from "../data";
import MobileNav from "../mobileNav/MobileNav";
const MegaNav = () => {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }
  return (
    <div className="flex justify-center bg-slate-50 p-4 z-50">
      {/* for logo */}
      <section
        ref={animationParent}
        className="container mx-auto flex justify-start items-center"
      >
        <Link href="/">
          {/* <Image className="" src={Logo} alt="" width={100} height={20} /> */}
          <h1 className="text-4xl font-extralight text-slate-500">
            <span className="text-cyan-400 font-extrabold">Z</span>-C
            <span className="text-orange-400 font-extrabold">O</span>DER
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
              <div className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
                <span>{val.label}</span>
                {val.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}

                {/* Mega Menu ============== */}

                {val.children && (
                  <div className="z-50 absolute left-0 right-0 top-12 hidden w-fit flex-col gap-1 rounded-lg bg-slate-50 py-5 px-10 shadow-md  transition-all group-hover:flex group-hover:flex-row">
                    {/* {val.img && (
                      <div className="flex flex-col justify-center items-center">
                        <Image src={val.img} alt="" width={40} height={40} />
                        <span className="text-sm text-neutral-400 transition-all hover:text-gray-500 uppercase">
                          All {val.label}
                        </span>
                      </div>
                    )} */}
                    <div className=" flex border-l justify-start flex-wrap">
                      {val.children.map((ch, i) => (
                        <Link
                          key={i}
                          href={ch.link ?? "#"}
                          className="flex cursor-pointer items-center py-1 pl-5 pr-3 text-neutral-400 hover:text-black"
                        >
                          {/* image */}
                          {ch.iconImage && <>{ch.iconImage}</>}
                          {/* item */}
                          <span className="whitespace-nowrap pl-3">
                            {ch.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </nav>
      </section>
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
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
    </div>
  );
};

export default MegaNav;
