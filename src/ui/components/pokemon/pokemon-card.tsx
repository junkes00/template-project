import type { IPokemon } from "@/app/@types/pokemon";

interface IPokemonCardProps {
  pokemon: IPokemon;
}

export function PokemonCard({ pokemon }: Readonly<IPokemonCardProps>) {
  return (
    <div key={pokemon.national_number}>
      <div className="flex  w-28 h-2w-28 bg-card align-middle justify-center rounded-xl mb-1">
        <img src={pokemon.sprites.normal} alt="pokemon" />
      </div>

      <p className="text-xs">N {pokemon.national_number}</p>
      <strong>{pokemon.name}</strong>
    </div>
  );
}
