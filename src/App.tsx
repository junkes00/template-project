import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Home } from "lucide-react";

import { ThemeProvider } from "./app/context/theme-context";
import { queryClient } from "./app/lib/query-client";
import { Header } from "./ui/components/header";
import { PokemonList } from "./ui/components/pokemon/pokemon-list";
import { ToggleTheme } from "./ui/components/toggle-theme";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex">
          <header className="flex flex-1 border p-2 items-center justify-between">
            <div>
              <Home />
            </div>

            <div className="flex">
              <ToggleTheme />
            </div>
          </header>
        </div>
      </ThemeProvider>
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
