"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GrCloudDownload, GrDetach } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { RiBuilding3Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import SubMenu from "./SubMenu";
const SideBar = () => {
  const pathname = usePathname();
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const [isSideBarOpen, setIsSideBarOpen] = useState(isTab ? false : true);

  //   console.log("isTab", isTab);
  const SideBar_animation = isTab
    ? {
        // mobile view
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // system view
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

  useEffect(() => {
    if (isTab) {
      // mobile
      setIsSideBarOpen(false);
    } else {
      // laptop
      setIsSideBarOpen(true);
    }
  }, [isTab]);

  //   path name changed and close the sidebar

  useEffect(() => {
    isTab && setIsSideBarOpen(false);
  }, [pathname]);

  const subMenusList = [
    {
      name: "hooks",
      rootUrl: "/learning/react",
      icon: RiBuilding3Line,
      menus: ["useCallback", "useMemo", "useReducer"],
    },
    {
      name: "advanced",
      rootUrl: "/learning/react",
      icon: TbReportAnalytics,
      menus: ["hoc", "reconciliation"],
    },
  ];
  return (
    <div>
      <div
        onClick={() => setIsSideBarOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z[990] bg-black/50 ${
          isSideBarOpen ? "block" : "hidden"
        }`}
      ></div>

      <motion.div
        variants={SideBar_animation}
        initial={{ x: isTab ? -250 : 0 }}
        animate={isSideBarOpen ? "open" : "closed"}
        className="bg-slate-50 text-gray shadow-md z-[30] max-w-[16rem] w-[16rem] h-screen
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
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 overflow-x-hidden -x-hidden scrollbar-thin scrollbar-track-gray-100/60 scrollbar-thumb ">
            <li className="">
              <Link
                className={`link ${
                  pathname === "/learning/react/multisteps"
                    ? "active"
                    : "text-neutral-500"
                }`}
                href="/learning/react/multisteps"
              >
                <GrDetach size={25} className="min-w-max" />
                MultiSteps Form
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

            {/* Submenus */}

            {(isSideBarOpen || isTab) && (
              <div className="border-y py-3 border-slate-200">
                <small className="pl-3 text-neutral-400 inline-block mb-2">
                  Categories With Submenus
                </small>
                {subMenusList?.map((menu, ind) => (
                  <div key={ind} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
          </ul>
          {/* {isSideBarOpen && (
            <div className="flex-1 text-sm max-h-48 my-auto whitespace-pre w-full border-2 font-medium">
              <div className="flex border-y items-center justify-between border-slate-200 p-4">
                <div>
                  <p>Spark</p>
                  <small>No cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )} */}
        </div>
      </motion.div>

      <div
        className="m-3 md:hidden cursor-pointer"
        onClick={() => setIsSideBarOpen(true)}
      >
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default SideBar;
