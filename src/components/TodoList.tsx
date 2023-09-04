import { Droppable } from 'react-beautiful-dnd';
import SingleTodo from './SingleTodo';
import { ReactElement, useContext } from 'react';
import { TodoContext } from '../context/todoContext';

const TodoList = () => {
  const { todos, completedTodos } = useContext(TodoContext);
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver && 'dragactive'}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos.map(
              (todo, index): ReactElement => (
                <SingleTodo index={index} key={todo.id} todo={todo} />
              )
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver && 'dragcomplete'
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map(
              (todo, index): ReactElement => (
                <SingleTodo index={index} key={todo.id} todo={todo} />
              )
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
