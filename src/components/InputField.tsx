import { useRef, useContext } from 'react';
import { TodoContext } from '../context/todoContext';

const InputField: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { todo, setTodo, setTodos } = useContext(TodoContext);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      setTodos((prevtodos) => [
        ...prevtodos,
        { id: Date.now(), todo, isDone: false },
      ]);
      setTodo('');
    }
  };

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        //shift focus from input box to remove :focus styles
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="input__submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
