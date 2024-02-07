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
    <div>
      <Headings title={"Selects Prototype Demo Example"} />
      <section className="container bg-gray-50 p-5">
        <div className="border rounded-xl p-5 bg-slate-50 border-dashed max-w-3xl mx-auto">
          <Input
            type="text"
            label="Search"
            placeholder="Searching Keyword"
            color={`${alert.length > 0 ? "danger" : "success"}`}
            value={word}
            onChange={(e) => setValueToState(e)}
            description={alert}
            variant="bordered"
          />
          {/* <Button onClick={resetAll} color="success">
            Reset
          </Button> */}
          {/* list component */}

          <div className="h-[400px] relative">
            {searchResult.length > 0 ? (
              <ResultList list={searchResult} />
            ) : (
              <div className="h-[400px] overflow-y-hidden">
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
