import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map(
        (todo): JSX.Element => (
          <li key={todo.id}>
            <SingleTodo />
          </li>
        )
      )}
    </div>
  );
};

export default TodoList;
