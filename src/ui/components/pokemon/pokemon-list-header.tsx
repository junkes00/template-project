import { SelectOrder } from "../select-order";

interface IPokemonListHeaderProps {
  onChangeSortList(value: string): void;
}

export function PokemonListHeader({ onChangeSortList }: Readonly<IPokemonListHeaderProps>) {
  return (
    <header className="mb-8">
      <SelectOrder onChangeOrder={onChangeSortList} />
    </header>
  );
}
