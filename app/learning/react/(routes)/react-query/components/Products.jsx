"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Suspense } from "react";
import CardListSkleton from "../../axios/components/skleton/CardListSkleton";
import Error from "./Error";
import ProductCard from "./ProductCard";
import { products } from "./url";
const Products = () => {
  let getProducts = async () => {
    let res = await axios.get(`${products}?limit=10`);
    return res?.data;
  };
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["fetchProducts"],
    queryFn: getProducts,
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
        <h1 className="text-4xl pt-5 font-bold font-catamaran p-2 text-slate-500 dark:text-slate-300">
          All Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 bg-slate-50/30 rounded-2xl my-3 p-3 dark:bg-slate-800">
          {data?.products?.map((product, index) => (
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
