import { useContext, ReactNode } from 'react';
import { ThemeContextType, Theme } from '../@types/theme';
import { ThemeContext } from '../context/themeContext';

type ThemeWrapperProps = {
  children: ReactNode;
};

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  };

  return (
    <div
      data-theme={theme}
      style={{
        background: theme === 'light' ? 'white' : '#242424',
        marginTop: -8,
        marginLeft: -8,
      }}
    >
      <select name="toggleTheme" onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  );
};
export default ThemeWrapper;
