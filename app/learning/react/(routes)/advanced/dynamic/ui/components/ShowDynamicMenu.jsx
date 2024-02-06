"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { dynamicData } from "../data/data";
const ShowDynamicMenu = () => {
  // console.log({ dynamicData });
  const [mainData, setMainData] = useState(dynamicData || []);
  const showInnerMenu = (ind, id, arr) => {
    arr.filter((data) => {
      if (data.id === id) {
        data.expand = !data.expand;
        setMainData([...mainData]);
      }
    });
  };

  console.log("innerVal", mainData);
  return (
    <div className="bg-gray-50 m-5 p-5 max-w-sm rounded-xl">
      {mainData.map((data, ind, fullArray) => (
        <div
          className="flex flex-col bg-green-50/60 rounded-xl p-2 border border-dashed mb-2"
          key={ind}
        >
          <p
            className="flex justify-between text-green-500 font-bold items-center cursor-pointer"
            onClick={() => showInnerMenu(ind, data.id, fullArray)}
          >
            {data.title} {data.id}{" "}
            {data.innerItem?.length > 0 ? (
              data.expand ? (
                <BsArrowUp />
              ) : (
                <BsArrowDown />
              )
            ) : (
              ""
            )}
          </p>
          {data.expand ? (
            <motion.div
              animate={
                data.expand
                  ? {
                      height: "fit-content",
                    }
                  : {
                      height: 0,
                    }
              }
              className="flex flex-col overflow-hidden h-0"
            >
              {data.innerItem.map((val, childInd, childArray) => (
                <div
                  className="flex flex-col bg-cyan-50/60 p-2 border rounded-xl border-dashed mb-2"
                  key={val.id}
                >
                  <p
                    className="flex justify-between text-cyan-500 font-bold items-center cursor-pointer"
                    onClick={() => showInnerMenu(childInd, val.id, childArray)}
                  >
                    {val.title} {val.id}{" "}
                    {val.innerItem?.length > 0 ? (
                      val.expand ? (
                        <BsArrowUp />
                      ) : (
                        <BsArrowDown />
                      )
                    ) : (
                      ""
                    )}
                  </p>
                  {val.expand ? (
                    <motion.div
                      animate={
                        val.expand
                          ? {
                              height: "fit-content",
                            }
                          : {
                              height: 0,
                            }
                      }
                      className="flex flex-col overflow-hidden h-0"
                    >
                      {val.innerItem.map((gval, ind) => (
                        <p
                          className="bg-orange-50/60 p-2 border border-dashed rounded-xl mb-2 text-orange-500 font-bold"
                          key={ind}
                        >
                          {gval.title}
                        </p>
                      ))}
                    </motion.div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowDynamicMenu;
