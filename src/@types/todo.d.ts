export interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface IContextProps {
  todo: string;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
