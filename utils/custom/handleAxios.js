import axios from "axios";

export const handleAxios = async (
  url,
  method,
  data = null,
  setResponse,
  setError,
  setLoading
) => {
  //   axios.defaults.headers.post["Content-Type"] =
  //     "application/json;charset=utf-8";
  //   axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  //   axios.defaults.headers.common["Authorization"] =
  //     store.getState().session.token;
  try {
    const res = await axios[method](url, data);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log("error", err);

    return err;
  }
};
