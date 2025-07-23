import { useState } from "react";

import { type SortOrder, useGetPokemons } from "@/app/hooks/use-get-pokemon";

import { PokemonCard } from "./pokemon-card";
import { PokemonListFilter } from "./pokemon-list-filter";

interface IPokemonListTableProps {
  sortOrder?: SortOrder;
}

export function PokemonListTable({ sortOrder }: Readonly<IPokemonListTableProps>) {
  const [typePokemonFiltered, setTypePokemonFiltered] = useState("");

  const { pokemons, pokemonTypes } = useGetPokemons({ sortOrder, typePokemonFiltered });

  return (
    <section className="flex">
      <PokemonListFilter pokemonTypes={pokemonTypes} onChangePokemonType={setTypePokemonFiltered} />
      <div className="flex flex-3 flex-wrap gap-4  justify-center">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.national_number} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}
