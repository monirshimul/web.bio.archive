"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url, method, data = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    console.log("called custom hooks");
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    // axios.defaults.headers.common['Authorization'] = store.getState().session.token;
    try {
      const res = await axios[method](url, data);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url, method, data]);
  return { response, error, loading };
};
