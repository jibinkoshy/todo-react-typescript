import React from 'react';
import './TodoListItem.css';

interface ToddListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<ToddListItemProps> = ({
  todo,
  toggleTodo
}) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        ></input>
        {todo.text}
      </label>
    </li>
  );
};
