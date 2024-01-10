"use client";
import { useGetProductsQuery, useGetCategoryQuery } from "@/store/fakeapi/api";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts, setCategory } from "@/store/fakeapi/slice";

export default function Home() {
  const { data } = useGetProductsQuery();
  //console.log(data);

  const { data: category } = useGetCategoryQuery();
  console.log(category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(data))
    dispatch(setCategory(category))
  }, [data, category]);



  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
