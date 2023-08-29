import { createContext, useState } from 'react';
import { Theme, ThemeContextType } from '../@types/theme';

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
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
