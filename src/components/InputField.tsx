import { useRef, useContext } from 'react';
import { TodoContext } from '../context';

interface Props {
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { todo, setTodo } = useContext(TodoContext);

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
