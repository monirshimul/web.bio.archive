import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const SubMenu = ({ data }) => {
  console.log("data", data);
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState();
  return (
    <>
      <li
        className={`link ${
          pathname.includes(data.name) ? "text-green-600" : "text-neutral-500"
        }`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        {/* dynamic icons */}
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize flex-1">{data.name}</p>
        <IoIosArrowDown
          className={`${
            subMenuOpen && "rotate-180"
          } transition-all duration-300`}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex flex-col overflow-hidden h-0"
      >
        {data.menus.map((innerMenu) => (
          <li key={innerMenu}>
            <Link
              className={`link capitalize ${
                pathname === `${data.rootUrl}/${data.name}/${innerMenu}`
                  ? "active"
                  : "text-neutral-400"
              }`}
              href={`${data.rootUrl}/${data.name}/${innerMenu}`}
            >
              {innerMenu}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
