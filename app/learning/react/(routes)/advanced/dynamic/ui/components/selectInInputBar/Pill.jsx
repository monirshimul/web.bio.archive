import Image from "next/image";
const Pill = ({ image, text, onClick }) => {
  return (
    <span
      className="h-[30px] hover:bg-gray-100 shadow-sm transition-all flex items-center gap-1 bg-gray-50 px-10 py-5 border border-dashed cursor-pointer text-neutral-600 rounded-2xl"
      onClick={onClick}
    >
      <Image src={image} alt={text} width={20} height={20} />
      <span>{text} &times;</span>
    </span>
  );
};

export default Pill;
