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
      <div className="bg-gray-100 z-50 w-full absolute top-2 left-0 p-5 shadow-sm flex gap-2 flex-wrap">
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
      <ul className="h-[300px] p-5 border overflow-y-scroll scrollbar-thin scrollbar-track-green-50 scrollbar-thumb">
        {list.map((data, index, mainArr) => (
          <li
            key={index}
            onClick={
              data.selected
                ? () => {}
                : () => handleSelectList(data.id, mainArr)
            }
            className={`flex transition-all items-center border border-dashed shadow-sm gap-5 p-5 ${
              data.selected
                ? "bg-slate-100 blur-sm cursor-not-allowed"
                : "bg-slate-50 hover:bg-slate-100 cursor-pointer"
            } my-2 rounded-lg text-sm font-catamaran text-green-700`}
          >
            <Image
              src={data.thumbnail}
              width={50}
              height={30}
              alt="pro image"
              className="border p-1"
            />
            {data.title}{" "}
            <span className="text-sm text-orange-400 font-normal text-wrap">
              {data.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
