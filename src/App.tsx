import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "./app/context/theme-context";
import { queryClient } from "./app/lib/query-client";
import { Header } from "./ui/components/header";
import { PokemonList } from "./ui/components/pokemon/pokemon-list";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Header />
        <PokemonList />
      </ThemeProvider>
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
