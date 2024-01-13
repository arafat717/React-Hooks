import { ReactNode, createContext, useState } from "react";

type TThemeContex = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

type TThemeProviderProps = {
  children: ReactNode;
};
export const ThemeContex = createContext<TThemeContex | undefined>(undefined);
const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [dark, setDark] = useState(false);
  const values = {
    dark,
    setDark,
  };
  return <ThemeContex.Provider value={values}>{children}</ThemeContex.Provider>;
};

export default ThemeProvider;
