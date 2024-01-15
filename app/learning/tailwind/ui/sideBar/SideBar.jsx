"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GrCloudDownload, GrDetach } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
const SideBar = () => {
  const pathname = usePathname();
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const SideBar_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };
  return (
    <div>
      <motion.div
        variants={SideBar_animation}
        animate={isSideBarOpen ? "open" : "closed"}
        className="bg-slate-50 text-gray shadow-md z-[10] max-w-[16rem] w-[16rem] h-screen
            overflow-hidden md:relative fixed"
      >
        {/* Sidebar Specific Logo */}
        <div className="flex items-center gap-6 font-medium border-b py-3 border-slate-200 mx-3">
          {/* <Image src={logo} width={50} height={50} alt="Logo" /> */}

          {/* Control Button */}
          <motion.div
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen);
            }}
            animate={
              isSideBarOpen
                ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    color: "gray",
                  }
                : {
                    x: 5,
                    y: 0,
                    rotate: 180,
                    color: "green",
                  }
            }
            transition={{ duration: 0.3 }}
            className="border rounded-full w-fit h-fit md:block z-50 hidden shadow-md cursor-pointer"
          >
            <IoIosArrowBack size={25} />
          </motion.div>
          <span className="text-lg whitespace-pre text-neutral-500">
            <span className="text-orange-400">Tailwind</span> Learning
          </span>
        </div>

        {/* Menus */}

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 overflow-x-hidden">
            <li className="">
              <Link
                className={`link ${
                  pathname === "/learning/tailwind/one"
                    ? "active"
                    : "text-neutral-500"
                }`}
                href="/learning/tailwind/one"
              >
                <GrDetach size={25} className="min-w-max" />
                First Projects
              </Link>
            </li>
            <li className="">
              <Link
                className={`link ${
                  pathname === "/learning/tailwind/two"
                    ? "active"
                    : "text-neutral-500"
                }`}
                href="/learning/tailwind/two"
              >
                <GrCloudDownload size={25} className="min-w-max" />
                Projects Two
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;
