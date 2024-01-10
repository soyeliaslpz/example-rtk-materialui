"use client";
import { useGetProductsQuery, useGetCategoryQuery } from "@/store/pokeApi/api";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategory, getPokemon } from "@/store/pokeApi/thunks";
export default function Home() {
  const { data: pokemons, isLoading } = useGetProductsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(pokemons));
  }, [pokemons]);

  return <div>{isLoading ? <h1>Cargando...</h1> : <h1>Hello World</h1>}</div>;
}
