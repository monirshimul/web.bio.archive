"use client";
import { useState } from "react";
// const testData = {
//   id: 1,
//   title: "React: Server-Side Rendering",
//   issuer: "LinkedIn",
//   date: "October 11, 2021",
//   subTitle: "LinkedIn Learning Certificate",
//   description: "LinkedIn Learning Certificate of Completion",
//   url: "",
// };

const TextTypeInput = ({ data }) => {
  const [inputVal, setInputVal] = useState(data);
  const handleInputVal = (e, i, arr) => {
    arr[i].value = e.target.value;
    setInputVal([...arr]);
  };
  console.log("child", inputVal);
  return (
    <>
      {inputVal.map((val, ind, arr) => (
        <div key={ind}>
          <label className="text-md text-slate-500 dark:text-slate-300">
            {val.label}
          </label>
          <input
            type={val.type}
            value={val.value}
            placeholder={val.placeholder}
            name={val.name}
            required={val.required}
            onChange={(e) => handleInputVal(e, ind, arr)}
            className="w-11/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300"
          />
        </div>
      ))}
    </>
  );
};

export default TextTypeInput;
