"use client";
import { navVariants } from "@/utils/animations/motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { navItems } from "../data";
import MobileNav from "../mobileNav/MobileNav";
import NavMenu from "./NavMenu";
const MegaNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
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
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex bg-transparent backdrop-blur-lg p-4 z-50 sticky top-0 left-0"
    >
      {/* for logo */}
      <section
        ref={animationParent}
        className="flex justify-between md:justify-center lg:justify-between items-center w-full flex-wrap"
      >
        <Link className="pl-5" href="/">
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
        <div></div>
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
    </motion.div>
  );
};

export default MegaNav;
