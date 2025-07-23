import { ToggleTheme } from "./toggle-theme";

export function Header() {
  return (
    <header className="flex flex-1 border p-10 items-center justify-between bg-red-900">
      <div>
        <h1 className="text-xl text-white font-medium">POKEDEX</h1>
      </div>

      <div className="flex">
        <ToggleTheme />
      </div>
    </header>
  );
}
