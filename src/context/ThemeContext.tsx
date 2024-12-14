import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ThemeChangeContext = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

type CalThemeChange = {
  children: ReactNode;
};

const CalThemeContext = createContext({} as ThemeChangeContext);

export function useThemeContext() {
  return useContext(CalThemeContext);
}

export function ThemeChangeProvider({ children }: CalThemeChange) {
  const [theme, setTheme] = useState<string>("");

  return (
    <CalThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </CalThemeContext.Provider>
  );
}
