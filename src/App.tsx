import React, { Fragment, useState } from 'react';
import { TodoListItem } from './TodoListItem';

const initialTodos: Array<Todo> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Write App', complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </Fragment>
  );
};

export default App;
