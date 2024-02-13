import Link from "next/link";

const NavMenu = ({ properties }) => {
  return (
    <Link
      href={properties.link ?? "#"}
      className="flex cursor-pointer items-center py-1 pl-5 pr-3 text-neutral-400 dark:text-slate-300 dark:hover:text-cyan-400 hover:text-black"
    >
      {properties.iconImage && <>{properties.iconImage}</>}

      <span className="whitespace-nowrap pl-3">{properties.label}</span>
    </Link>
  );
};

export default NavMenu;
