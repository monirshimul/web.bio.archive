import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SingleNavItem = (props) => {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);
  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return props.access ? (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={props.link ?? "#"}
      className="relative px-2 py-3 transition-all"
    >
      <p
        className={`flex cursor-pointer items-center gap-2 text-lg font-bold dark:text-slate-300 dark:hover:text-cyan-500 text-neutral-400 group-hover:text-black`}
      >
        <span>{props.label}</span>
        {props.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && props.children && (
        <div className="  w-auto flex-col gap-1 rounded-lg bg-gray-100 dark:bg-slate-700/40  py-3 transition-all flex ">
          {props.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center text-lg font-bold  py-1 pl-6 pr-8 text-neutral-400 dark:text-slate-300 dark:hover:text-orange-400 hover:text-white  "
            >
              {/* image */}
              {ch.iconImage && ch.iconImage}
              {/* item */}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  ) : (
    ""
  );
};

export default SingleNavItem;
