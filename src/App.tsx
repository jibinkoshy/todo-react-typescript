import React, { Fragment } from 'react';
import { TodoListItem } from './TodoListItem';

const todos: Array<Todo> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Write App', complete: false }
];

const App: React.FC = () => {
  return (
    <Fragment>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </Fragment>
  );
};

export default App;
