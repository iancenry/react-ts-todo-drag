import { createContext, useMemo, useState } from 'react';
import { IContextProps, ITodo } from '../@types/todo';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export const TodoContext = createContext<IContextProps>({} as IContextProps);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ITodo[]>([]);

  const contextProviderValues: IContextProps = useMemo(
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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log('me');

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
      <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
