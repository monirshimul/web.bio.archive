import { Chip } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
const ResultList = ({ list }) => {
  const [selectedData, setSelectedData] = useState([]);

  const handleSelectList = (proId, fullArray) => {
    fullArray.filter((product) => {
      if (product.id === proId) {
        product.selected = true;
        setSelectedData([...selectedData, product]);
      }
    });
  };

  const removeSelectedItem = (newId, newArr) => {
    let seeData = newArr.filter((newData) => newData.id !== newId);
    console.log(seeData);
    setSelectedData([...seeData]);
    let copyMainArray = [...list];
    copyMainArray.filter((data) => {
      if (data.id === newId) {
        data.selected = false;
      }
    });
  };

  return (
    <div className="pt-20">
      <div className="bg-gray-100 dark:bg-slate-800 z-50 w-full absolute top-2 left-0 p-5 shadow-sm flex gap-2 flex-wrap">
        {selectedData.map((listed, ind, arr) => (
          <Chip
            size="md"
            color="success"
            key={ind}
            onClose={() => removeSelectedItem(listed.id, arr)}
          >
            {listed.title}
          </Chip>
        ))}
      </div>
      <ul className="h-[300px] p-5 border border-dashed dark:border-slate-500 overflow-y-scroll scrollbar-thin scrollbar-track-green-50 scrollbar-thumb">
        {list.map((data, index, mainArr) => (
          <li
            key={index}
            onClick={
              data.selected
                ? () => {}
                : () => handleSelectList(data.id, mainArr)
            }
            className={`flex transition-all items-center border border-dashed dark:border-slate-500 shadow-sm gap-5 p-5 ${
              data.selected
                ? "bg-slate-100 dark:bg-slate-700 blur-sm cursor-not-allowed"
                : "bg-slate-50 dark:bg-slate-700/40 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
            } my-2 rounded-lg text-sm font-bold font-catamaran text-green-700 dark:text-sky-300`}
          >
            <Image
              src={data.thumbnail}
              width={50}
              height={30}
              alt="pro image"
              className="border p-1"
            />
            {data.title}{" "}
            <span className=" hidden md:block text-sm text-orange-400 dark:text-green-500  font-medium text-wrap">
              {data.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
