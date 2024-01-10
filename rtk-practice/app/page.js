"use client";
import { useGetProductsQuery, useGetCategoryQuery } from "@/store/fakeapi/api";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategory, getProducts } from "@/store/fakeapi/thunks";
export default function Home() {
  const { data: dataProducts, isLoading } = useGetProductsQuery();
  const { data: dataCategory } = useGetCategoryQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(dataProducts));
    dispatch(getCategory(dataCategory));
  }, [dataProducts, dataCategory]);

  return <div>{isLoading ? <h1>Cargando...</h1> : <h1>Hello World</h1>}</div>;
}
