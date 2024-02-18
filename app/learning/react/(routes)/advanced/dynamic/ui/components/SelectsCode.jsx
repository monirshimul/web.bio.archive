"use client";

import demo from "@/public/img/demoSelect.png";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Headings from "./Headings";
import ResultList from "./ResultList";
const SelectsCode = () => {
  const [word, setWord] = useState("");
  const [alert, setAlert] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    const handleSearch = async () => {
      if (word.trim() === "") {
        setSearchResult([]);
        return;
      }
      if (limit > 0) {
        let res = await fetch(
          `https://dummyjson.com/products/search?q=${word}`
        );
        let data = await res.json();
        setSearchResult(data.products);
        setLimit(data.limit);
        setAlert("");
      } else if (limit === 0) {
        setLimit(1);
        setWord("");
        setAlert("There are no products like this.Search Again Please!");
      }
    };
    handleSearch();
  }, [word, limit]);

  const setValueToState = (e) => {
    let val = e.target.value;
    setWord(val);
  };

  const resetAll = () => {
    setLimit(1);
    setWord("");
  };
  console.log(searchResult.length);
  return (
    <div className="">
      <Headings title={"Selects Prototype Demo Example"} />
      <section className="">
        <div className="border rounded-xl p-5 bg-slate-50 dark:bg-slate-700/40 dark:text-slate-300 border-dashed dark:border-slate-500 w-11/12 lg:w-7/12 mx-auto">
          <Input
            type="text"
            label="Search"
            placeholder="Searching Keyword"
            color={`${alert.length > 0 ? "danger" : "success"}`}
            value={word}
            onChange={(e) => setValueToState(e)}
            description={alert}
            variant="bordered"
            className="my-3"
          />
          {/* <Button onClick={resetAll} color="success">
            Reset
          </Button> */}
          {/* list component */}

          <div className="h-[400px] relative flex justify-center">
            {searchResult.length > 0 ? (
              <ResultList list={searchResult} />
            ) : (
              <div className="h-[400px] overflow-y-hidden ">
                <Image src={demo} alt="sample" width={750} height={100} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectsCode;
