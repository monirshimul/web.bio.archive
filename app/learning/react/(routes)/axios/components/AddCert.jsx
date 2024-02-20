"use client";

import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { inputMaker } from "./data";
const testData = {
  id: 1,
  title: "React: Server-Side Rendering",
  issuer: "LinkedIn",
  date: "October 11, 2021",
  subTitle: "LinkedIn Learning Certificate",
  description: "LinkedIn Learning Certificate of Completion",
  url: "",
};
// let inputMaker = [
//   {
//     type: "text",
//     value: "",
//     placeholder: "Enter title",
//     name: "title",
//   },
//   {
//     type: "text",
//     value: "",
//     placeholder: "Enter issuer",
//     name: "issuer",
//   },
//   {
//     type: "text",
//     value: "",
//     placeholder: "Enter date",
//     name: "date",
//   },
//   {
//     type: "text",
//     value: "",
//     placeholder: "Enter subTitle",
//     name: "subTitle",
//   },
//   {
//     type: "text",
//     value: "",
//     placeholder: "Enter description",
//     name: "description",
//   },
//   {
//     type: "text",
//     value: "",
//     placeholder: "Enter url",
//     name: "url",
//   },
// ];
const AddCert = ({ addNewCert }) => {
  const [inputVal, setInputVal] = useState(inputMaker);
  //   const [formVal, setFormVal] = useState(
  //     Object.keys(testData)
  //       .filter((v) => v !== "id")
  //       .reduce((ac, a) => ({ ...ac, [a]: "" }), {})
  //   );
  //   console.log("fields", formVal);

  //   let name = ["monir", "shimul", "kobir"];
  //   let con = name.reduce((prev, val) => {
  //     return {
  //       ...prev,
  //       [val]: "",
  //     };
  //   }, {});
  //   console.log(con);

  const handleInputVal = (e, i, arr) => {
    arr[i].value = e.target.value;
    setInputVal([...arr]);
  };

  const submitForm = (e) => {
    e.preventDefault();
    let resizedVal = inputVal.reduce((prev, val, ind, mainArr) => {
      return {
        ...prev,
        [val.name]: val.value,
      };
    }, {});

    let checkValue = Object.values(resizedVal).every(Boolean);
    console.log("checkValue", checkValue);

    (checkValue && addNewCert(resizedVal)) ||
      alert("Please fill-up all the value");
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto rounded-2xl bg-slate-50 dark:bg-slate-700/40 p-5 my-5 border border-dashed dark:border-slate-500"
    >
      <motion.div variants={fadeIn("up", "tween", 0.3, 0.5)}>
        <form
          onSubmit={(e) => submitForm(e)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          {inputVal.map((val, ind, arr) => (
            <input
              key={ind}
              type={val.type}
              value={val.value}
              placeholder={val.placeholder}
              name={val.name}
              onChange={(e) => handleInputVal(e, ind, arr)}
              className="w-11/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300"
            />
          ))}

          <button
            type="submit"
            className=" w-11/12 rounded-2xl z-10 bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-1 text-white transition-all cursor-pointer hover:scale-90 shadow-lg shadow-orange-600 hover:shadow-sm"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddCert;
