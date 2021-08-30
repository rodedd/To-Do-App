import React from 'react';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearchbar } from './components/TodoSearchbar';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoNewButton } from './components/TodoNewButton';
import { TodoHeader } from './components/TodoHeader';

import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoHeader />
      <div className="App_main">
        <TodoCounter />
        <TodoSearchbar />
        <TodoList>
          {todos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}  
            />
          ))}
        </TodoList>
        <TodoNewButton />
      </div>
    </React.Fragment>
  );
}

export { App };
