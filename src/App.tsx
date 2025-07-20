import { Home } from "lucide-react";

import { ThemeProvider } from "./app/context/theme-context";
import { ToggleTheme } from "./ui/components/toggle-theme";

export function App() {
  return (
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
  );
}
