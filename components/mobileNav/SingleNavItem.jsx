import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const SingleNavItem = (props) => {
  console.log("props", props);
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);
  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={props.link ?? "#"}
      className="relative px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
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
        <div className="  w-auto flex-col gap-1 rounded-lg bg-gray-600 py-3 transition-all flex ">
          {props.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center  py-1 pl-6 pr-8 text-neutral-400 hover:text-black  "
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
  );
};

export default SingleNavItem;
