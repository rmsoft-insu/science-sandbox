"use client";

import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemon } from "./get-pokemon";

export function PokemonInfo() {
  const { data } = useSuspenseQuery(getPokemon);

  return (
    <div>
      <figure>
        <img src={data.sprites.front_shiny} height={200} alt={data.name} />
        <h2>I&apos;m {data.name}</h2>
      </figure>
    </div>
  );
}
