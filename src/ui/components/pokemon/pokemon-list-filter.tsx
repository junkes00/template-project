interface IPokemonListFilterProps {
  pokemonTypes: string[];
  onChangePokemonType(typePokemon: string): void;
}

export function PokemonListFilter({
  pokemonTypes,
  onChangePokemonType,
}: Readonly<IPokemonListFilterProps>) {
  return (
    <aside className="flex-1 max-h-40">
      <header>
        <h1>Tipos de Pokemons:</h1>
      </header>

      <div className="flex flex-wrap gap-4 py-2 px-4">
        {pokemonTypes.map((type) => (
          <div key={type}>
            <button
              type="button"
              value={type}
              onClick={(e) => onChangePokemonType(e.currentTarget.value)}
              className="border rounded-xl py-1 px-3 bg-red-900 text-white hover:bg-red-700 transition-all duration-300"
            >
              {type}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
