import React from 'react';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearchbar } from './components/TodoSearchbar';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoNewButton } from './components/TodoNewButton';

// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearchbar />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <TodoNewButton />
    </React.Fragment>
  );
}

export { App };
