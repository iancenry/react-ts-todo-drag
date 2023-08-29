import { useContext } from 'react';
import { ThemeContextType, Theme } from '../@types/theme';
import { ThemeContext } from '../context/themeContext';

const ThemeWrapper: React.FC = ({ children }) => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  };

  return (
    <div
      data-theme={theme}
      style={{ background: theme === 'light' ? 'white' : '#242424' }}
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
