import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import TodoProvider from './context/todoContext';
import ThemeWrapper from './components/ThemeWrapper';
import ThemeProvider from './context/themeContext';

const App = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <div className="app">
            <span className="app__heading">Taskify</span>
            <InputField />
            <TodoList />
          </div>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  );
};

export default App;
