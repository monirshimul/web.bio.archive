"use client";
import { useContext } from "react";
import {
  MdDoubleArrow,
  MdKeyboardDoubleArrowDown,
  MdOutlineTaskAlt,
} from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { MainContext } from "./MainForm";
const LeftMenuList = ({ name, icon }) => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  let { type, changeType, status } = useContext(MainContext);
  let { Basic, Official, Personal } = status;
  console.log("isTabletMid ===", isTabletMid);
  return (
    <>
      <div
        onClick={() => changeType(name)}
        className={`${
          name === type
            ? "bg-green-50 text-green-600 "
            : "bg-neutral-50 text-neutral-400 "
        }p-2 hover:bg-green-50/30 transition-all shadow-sm pt-3 text-lg font-semibold flex gap-5 justify-between items-start pl-5 cursor-pointer`}
      >
        <div className="flex gap-5">
          {icon}
          <span className={`text-lg font-overPass`}>{name} Info</span>
        </div>
        <span className="flex">
          {name === type ? (
            isTabletMid ? (
              <MdKeyboardDoubleArrowDown
                size={20}
                className={`mr-3 animate-ping`}
              />
            ) : (
              <MdDoubleArrow size={20} className={`mr-3 animate-ping`} />
            )
          ) : (
            ""
          )}
          {status[type] && name === type ? (
            <MdOutlineTaskAlt size={20} className=" mr-3 animate-pulse" />
          ) : (
            ""
          )}
        </span>
      </div>
    </>
  );
};

export default LeftMenuList;
