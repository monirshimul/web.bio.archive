"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const SideBarOpenCloseVariants = {
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
    },
  },
};

const SideBarReuseable = ({ data, title, bg }) => {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [mainData, setMainData] = useState(data || []);
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const showInnerMenu = (id, arr) => {
    arr.filter((menu) => {
      if (menu.id === id) {
        menu.showing = !menu.showing;
        setMainData([...mainData]);
      }
    });
  };

  return (
    <motion.div
      variants={SideBarOpenCloseVariants}
      animate={showSidebar ? "open" : "closed"}
      className={`${
        showSidebar ? "min-w-[16rem]" : ""
      } w-[16rem] h-screen bg-white dark:bg-slate-800 p-2 sticky top-24 left-0 z-40 bg-transparent backdrop-blur-lg dark:bg-transparent dark:backdrop-blur-lg`}
    >
      <div
        className={`border-y relative border-dashed py-3 border-slate-100 dark:border-slate-600 shadow-md`}
      >
        <span className="capitalize flex justify-center items-center text-neutral-500 dark:text-slate-300 text-medium font-bold font-catamaran">
          {title}
        </span>
        <div
          onClick={handleSidebar}
          className={`absolute flex justify-center items-center cursor-pointer ${bg} rounded-r-2xl left-[15rem] top-3 w-[30px] h-[30px]`}
        >
          {showSidebar ? (
            <FaArrowLeft color="white" size={15} />
          ) : (
            <FaArrowRight color="white" size={15} />
          )}
        </div>
      </div>
      <div className="">
        <ul className="flex flex-col gap-1 py-2">
          {mainData.map((item, index, mainArray) => (
            <div key={index} className="flex flex-col">
              <li
                className={`${pathname === item.link ? "active" : "link"}`}
                onClick={() => showInnerMenu(item.id, mainArray)}
              >
                {item.iconImage}
                <Link className="capitalize flex-1" href={item.link}>
                  {item.label}
                </Link>
                {item.children?.length > 0 ? (
                  <IoIosArrowDown
                    className={`${
                      item.showing && "rotate-180"
                    } transition-all duration-300`}
                  />
                ) : (
                  ""
                )}
              </li>
              <motion.div
                animate={
                  item.showing && item.children?.length > 0
                    ? {
                        height: "fit-content",
                      }
                    : {
                        height: 0,
                      }
                }
                className="flex flex-col overflow-hidden h-0 gap-0.5"
              >
                {item.children?.map((eachChildMenu, childIndex) => (
                  <li
                    key={childIndex}
                    className={` dark:border-none ml-2 ${
                      pathname === eachChildMenu.link ? "active" : "link"
                    }`}
                  >
                    {eachChildMenu.iconImage}
                    <Link className="" href={eachChildMenu.link}>
                      {eachChildMenu.label}
                    </Link>
                  </li>
                ))}
              </motion.div>
            </div>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SideBarReuseable;
