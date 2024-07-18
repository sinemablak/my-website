import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ContextTheme = createContext();
const html = document.querySelector("html");

export function useTheme() {
  return useContext(ContextTheme);
}

export function ContextThemeProvider({ children }) {
  const eTheme = Object.freeze({
    dark: "dark",
    light: "light",
  });

  const [theme, setTheme] = useLocalStorage("theme", eTheme.light);

  function toggleTheme() {
    setTheme(eTheme.light === theme ? eTheme.dark : eTheme.light);
  }

  useEffect(() => {
    if (eTheme.dark === theme) {
      html.classList.add(eTheme.dark);
    } else {
      html.classList.remove(eTheme.dark);
    }
  }, [theme, eTheme]);

  return (
    <ContextTheme.Provider value={{ eTheme, theme, toggleTheme }}>
      {children}
    </ContextTheme.Provider>
  );
}
