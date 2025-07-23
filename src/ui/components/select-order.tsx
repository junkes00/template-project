interface ISelectOrderProps {
  onChangeOrder: (value: string) => void;
}

export function SelectOrder({ onChangeOrder }: Readonly<ISelectOrderProps>) {
  return (
    <div className="flex w-full gap-2 justify-end">
      <label htmlFor="select-order">Ordenar por:</label>
      <select
        name="select-order"
        id="select-order"
        className="border rounded-xl px-1 hover:bg-card/90"
        onChange={(e) => onChangeOrder(e.target.value)}
      >
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>
    </div>
  );
}
