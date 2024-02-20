"use client";

import axios from "axios";
import { useEffect } from "react";
const GetLocalData = () => {
  useEffect(() => {
    let getLocalData = async () => {
      let data = await axios.get("https://web-bio-archive.vercel.app/posts");
      console.log("data", data.data);
    };
    getLocalData();
  }, []);

  return <div>GetLocalData</div>;
};

export default GetLocalData;
