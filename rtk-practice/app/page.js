"use client";
import { useGetProductsQuery } from "@/store/fakeapi/api";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/store/fakeapi/slice";
import { getProducts } from "@/store/fakeapi/thunks";

export default function Home() {
  const { data } = useGetProductsQuery();
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(data));
  }, [data]);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
