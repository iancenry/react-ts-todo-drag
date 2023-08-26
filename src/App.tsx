import { useState, useMemo } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TodoContext, ContextProps } from './context';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const contextProviderValues: ContextProps = useMemo(
    () => ({
      todo,
      todos,
      setTodo,
      setTodos,
      completedTodos,
      setCompletedTodos,
    }),
    [todo, todos, setTodo, setTodos, completedTodos, setCompletedTodos]
  );

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((prevtodos) => [
        ...prevtodos,
        { id: Date.now(), todo, isDone: false },
      ]);
      setTodo('');
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    const active = todos,
      complete = completedTodos;

    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <TodoContext.Provider value={contextProviderValues}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="app">
          <span className="app__heading">Taskify</span>
          <InputField handleAdd={handleAdd} />
          <TodoList />
        </div>
      </DragDropContext>
    </TodoContext.Provider>
  );
};

export default App;
