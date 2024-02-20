"use client";
import { certification } from "@/utils/URL/url";
import randomId from "@/utils/custom/IdGen";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import AddCert from "./AddCert";
import CardList from "./CardList";
import CardListSkleton from "./skleton/CardListSkleton";
const GetLocalData = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signal, setSignal] = useState(false);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setValue((v) => (v >= 100 ? 0 : v + 10));
  //     }, 50);

  //     return () => clearInterval(interval);
  //   }, []);
  useEffect(() => {
    let getData = async () => {
      setLoading(true);
      try {
        let res = await axios.get(certification);
        console.log("recalling after adding data", res);
        setResponse(res?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    getData();
  }, []);

  //   console.log(response, error, loading);

  const addNewData = async (data) => {
    let modData = {
      id: randomId(),
      ...data,
    };
    setLoading(true);
    console.log("mod", modData);
    try {
      let res = await axios.post(certification, modData);
      setResponse([...response, res?.data]);
      setSignal(randomId());
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError(err);
    }
  };

  const removeCert = (id) => {};

  return (
    <div className="container mx-auto bg-slate-50 rounded-2xl dark:bg-slate-700/40 p-3">
      <h1 className="text-center text-2xl flex justify-center gap-5 md:justify-between items-center lg:text-4xl md:px-10 font-bold font-klee_one text-slate-500 dark:text-slate-300">
        Certifications
        <BiSolidMessageSquareAdd
          onClick={() => setSignal(!signal)}
          className={`dark:text-green-500 cursor-pointer hover:scale-90 transition-all ${
            signal && "rotate-45 dark:text-orange-600 text-orange-600"
          }`}
          size={50}
        />
      </h1>

      {signal && <AddCert addNewCert={addNewData} />}

      <div className="">
        {response.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 bg-slate-50/30 rounded-2xl my-3 p-3 dark:bg-slate-800 justify-center">
            {response.map((value, ind) => (
              <CardList {...value} key={ind} deleteCert={removeCert} />
            ))}
          </div>
        ) : (
          <CardListSkleton />
        )}
      </div>
    </div>
  );
};

export default GetLocalData;
