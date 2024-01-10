"use client";
import PaginationRounded from "@/components/Pagination/Pagination";
import PokemonList from "@/components/PokemonList/PokemonList";
import { useGetProductsQuery } from "@/store/pokeApi/api";
import { getPokemon } from "@/store/pokeApi/thunks";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PagePokemon() {
  const dispatch = useDispatch();
  const { data: dataPokemons, isLoading, isSuccess } = useGetProductsQuery();
  const data = dataPokemons?.results;

  useEffect(() => {
    dispatch(getPokemon(data));
  }, [isSuccess]);

  return (
    <>
      <PokemonList />
      <PaginationRounded />
    </>
  );
}
