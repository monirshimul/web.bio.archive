import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import { VscEdit } from "react-icons/vsc";
const ProductCard = ({ product }) => {
  const {
    id,
    title,
    brand,
    category,
    stock,
    rating,
    thumbnail,
    description,
    price,
  } = product;
  return (
    <div className="border h-full border-dashed dark:border-slate-500 p-3 rounded-xl">
      <div className="w-11/12 p-2 mx-auto bg-slate-50 dark:bg-slate-700/40 rounded-2xl flex justify-center items-center">
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={250}
          className="object-contain h-[250px] w-[300px]"
        />
      </div>
      <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-2xl lg:text-4xl text-neutral-600 dark:text-slate-300 font-catamaran">
        {/* <TypingText title={""} /> */}
        {title}
      </h1>
      <div className="pl-5">
        <h3 className="text-3xl text-wrap font-bold antialiased text-orange-500 font-catamaran">
          {brand}
          <br />
          {category}
        </h3>
        <span className="text-2xl dark:text-cyan-300 antialiased font-bold text-neutral-600 font-catamaran">
          Price: {price}, Stock: {stock}, Rating: {rating}
        </span>
        <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
          {description}
        </p>
        {/* <p className="font-light antialiased text-sky-400 font-catamaran">
          <a className="" target="_blank" href={url}>
            View Certificate
          </a>
        </p> */}
        <div className="flex flex-row gap-3 justify-end items-center p-3 bg-slate-100 dark:bg-slate-700/40 rounded-2xl">
          <VscEdit className="cursor-pointer text-orange-500" size={25} />
          <TiDeleteOutline className="cursor-pointer text-rose-500" size={30} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
