import { createContext } from 'react';
import { Todo } from './model';

export interface ContextProps {
  todo: string;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<ContextProps>({} as ContextProps);
