"use client";

import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { motion } from "framer-motion";
import { useState } from "react";
import CheckboxTypeInput from "./CheckboxTypeInput";
import SelectTypeInput from "./SelectTypeInput";
import TextTypeInput from "./TextTypeInput";
// const testData = {
//   id: 1,
//   title: "React: Server-Side Rendering",
//   issuer: "LinkedIn",
//   date: "October 11, 2021",
//   subTitle: "LinkedIn Learning Certificate",
//   description: "LinkedIn Learning Certificate of Completion",
//   url: "",
// };

const MultiInputForm = ({ feedData }) => {
  console.log("feedData", feedData);

  const [multiCheckValues, setMultiCheckValues] = useState([]);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto rounded-2xl bg-slate-50 dark:bg-slate-700/40 p-5 my-5 border border-dashed dark:border-slate-500"
    >
      <h1 className="text-4xl pt-5 font-bold font-catamaran p-2 text-slate-500 dark:text-slate-300">
        {"heading"}
      </h1>
      <motion.div variants={fadeIn("up", "tween", 0.3, 0.5)}>
        <form
          onSubmit={(e) => submitForm(e)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          {feedData.map((val, ind) => {
            if (val.type === "textInput" && val.children?.length > 0) {
              return <TextTypeInput key={ind} data={val.children} />;
            }
            if (val.type === "multiCheckBox" && val.children?.length > 0) {
              return (
                <div
                  key={ind}
                  className="border border-dashed dark:border-slate-500 rounded-2xl p-2"
                >
                  <label className="dark:text-slate-300">{val.label}</label>
                  <div className="flex gap-2 flex-wrap">
                    <CheckboxTypeInput data={val.children} />
                  </div>
                </div>
              );
            }
            if (val.type === "multiSelect" && val.children?.length > 0) {
              return <SelectTypeInput key={ind} data={val.children} />;
            }
          })}

          <div className="flex justify-start items-center">
            <button
              type="submit"
              className=" w-11/12 h-10 rounded-2xl z-10 bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-1 text-white transition-all cursor-pointer hover:scale-90 shadow-lg shadow-orange-600 hover:shadow-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default MultiInputForm;
