import { Suspense, useCallback, useState } from "react";

import { type SortOrder } from "@/app/hooks/use-get-pokemon";

import { Loader } from "../loader";
import { PokemonListHeader } from "./pokemon-list-header";
import { PokemonListTable } from "./pokemon-list-table";

export function PokemonList() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleSortPokemons = useCallback((value: string) => {
    setSortOrder(value as SortOrder);
  }, []);

  return (
    <div className="p-8">
      <PokemonListHeader onChangeSortList={handleSortPokemons} />

      <Suspense fallback={<Loader />}>
        <PokemonListTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
}
