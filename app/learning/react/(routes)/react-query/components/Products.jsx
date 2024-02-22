"use client";

import TypeTextForm from "@/app/learning/react/ui/components/TypeTextForm";
import { products } from "@/utils/URL/url";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Suspense, useState } from "react";
import { toast } from "react-toastify";
import Headings from "../../../ui/components/Headings";
import CardListSkleton from "../../axios/components/skleton/CardListSkleton";
import Error from "./Error";
import ProductCard from "./ProductCard";
import { inputMaker } from "./formData";
const Products = () => {
  const queryClient = useQueryClient();

  const [productData, setProductData] = useState([]);
  let getProducts = async () => {
    let res = await axios.get(`${products}`);
    console.log("get pro", res.data);
    return res?.data;
  };
  const newFormData = async (formData) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    // let res = await axios.post(`${products}/add`, formData, axiosConfig);
    let res = await axios.post(products, formData);
    setProductData([...productData, res?.data]);
    toast("Product has been Created");
    //only for myjson-server============
    data.unshift(res?.data);
    return res?.data;
  };

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["fetchProducts"],
    queryFn: getProducts,
  });

  const mutation = useMutation({
    mutationFn: newFormData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchProducts"] });
    },
  });

  console.log("products", data);
  let content = "";
  if (isLoading) {
    content = (
      <div className="w-11/12 mx-auto rounded-2xl">
        <CardListSkleton />;
      </div>
    );
  }
  if (isError) {
    content = <Error />;
  }

  if (isSuccess) {
    content = (
      <div className="w-11/12 mx-auto rounded-2xl">
        {/* <h1 className="text-4xl pt-5 font-bold font-catamaran p-2 text-slate-500 dark:text-slate-300">
          All Products
        </h1> */}
        <Headings
          title={"All Products"}
          bg={" bg-slate-50 dark:bg-slate-700/40"}
        />
        <TypeTextForm
          addNew={mutation.mutate}
          feedData={inputMaker}
          heading={"Add New Product"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 bg-slate-50/30 rounded-2xl my-3 p-3 dark:bg-slate-800">
          {data?.map((product, index) => (
            <div key={index}>
              <Suspense fallback={<CardListSkleton />}>
                <ProductCard product={product} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Products;
