import React from 'react';
import './TodoListItem.css';

interface ToddListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<ToddListItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input type="checkbox" checked={todo.complete}></input>
        {todo.text}
      </label>
    </li>
  );
};
