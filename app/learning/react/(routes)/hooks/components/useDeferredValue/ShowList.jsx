import { useDeferredValue, useEffect, useMemo } from "react";

const ShowList = ({ inputData }) => {
  const deferredInput = useDeferredValue(inputData);
  const isEven = (number) => {
    let res = "";
    if (number % 2 === 0) {
      res = true;
    } else {
      res = false;
    }
    return res;
  };

  useEffect(() => {
    console.log(
      `Normal input: ${inputData} \nDeferred Input: ${deferredInput}`
    );
  }, [inputData, deferredInput]);

  const size = 5000;
  const list = useMemo(() => {
    const newList = [];
    for (let i = 0; i < size; i++) {
      newList.push(
        deferredInput ? (
          <div
            className={`${
              isEven(i)
                ? "dark:bg-cyan-900/40 bg-green-200"
                : "dark:bg-orange-900/40 bg-orange-200"
            } m-1 p-2 border border-dashed dark:border-slate-500 w-fit`}
            key={i}
          >
            <span className="dark:text-slate-400 font-bold font-catamaran text-wrap">
              {deferredInput}
            </span>
          </div>
        ) : (
          ""
        )
      );
    }
    return newList;
  }, [deferredInput]);
  return list;
};

export default ShowList;
