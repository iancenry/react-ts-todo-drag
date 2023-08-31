import { ReactNode, createContext, useState } from 'react';
import { Theme, ThemeContextType } from '../@types/theme';

type ThemeContentProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: ThemeContentProps) => {
  const [themeMode, setThemeMode] = useState<Theme>('light');

  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
