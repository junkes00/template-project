import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import type { IPokemon } from "../@types/pokemon";
import { pokemonService } from "../service/pokemon";

export type SortOrder = "asc" | "desc";

interface IUseGetPokemonsProps {
  sortOrder?: SortOrder;
  typePokemonFiltered?: string;
}

interface IUseGetPokemonsReturn {
  pokemons: IPokemon[];
  pokemonTypes: string[];
}

export function useGetPokemons({
  sortOrder = "asc",
  typePokemonFiltered,
}: IUseGetPokemonsProps): IUseGetPokemonsReturn {
  const { data: allPokemons } = useSuspenseQuery({
    queryKey: ["pokemon", { sortOrder }],
    queryFn: pokemonService.getPokemons,
    select: (data) => {
      const uniquePokemons = data.reduce(
        (acc, pokemon) => {
          if (!acc[pokemon.national_number]) {
            acc[pokemon.national_number] = pokemon;
          }
          return acc;
        },
        {} as Record<string, IPokemon>,
      );

      const sortedPokemons = Object.values(uniquePokemons).sort((a, b) => {
        const numA = parseInt(a.national_number.replace(/\D/g, ""), 10);
        const numB = parseInt(b.national_number.replace(/\D/g, ""), 10);
        return sortOrder === "asc" ? numA - numB : numB - numA;
      });

      return sortedPokemons;
    },
    staleTime: Infinity,
  });

  const pokemonTypes = useMemo(() => {
    return Array.from(new Set(allPokemons.flatMap((pokemon) => pokemon.type))).sort();
  }, []);

  const filteredPokemons = useMemo(() => {
    return typePokemonFiltered
      ? allPokemons.filter((pokemon) => pokemon.type.includes(typePokemonFiltered))
      : allPokemons;
  }, [allPokemons, typePokemonFiltered]);

  return {
    pokemons: filteredPokemons,
    pokemonTypes,
  };
}
