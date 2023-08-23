//just a reference if need be - useReducer alternative - SingleTodo.tsx
import { Todo } from './model';
import { useReducer } from 'react';

type Actions =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }
  | { type: 'done'; payload: number };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case 'remove':
      return state.filter((todo) => todo.id !== action.payload);

    case 'done':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

const ReducerReference = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);

  return <div>ReducerReference</div>;
};

export default ReducerReference;
