import React from 'react';

import { TodoContext } from './components/TodoContext';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearchbar } from './components/TodoSearchbar';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoNewButton } from './components/TodoNewButton';
import { TodoHeader } from './components/TodoHeader';

function AppUI() {
  return (
    <React.Fragment>
      <TodoHeader />
      <div className="App_main">
        <TodoCounter />
        <TodoSearchbar />
          <TodoContext.Consumer>
            {({
                loading, 
                error, 
                searchedTodos, 
                toggleCompleteTodo, 
                deleteTodo,
              }) => (
              <TodoList>
                {loading && <p>Cargando!</p>}
                {error && <p>Error!</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer tarea!</p>}
                {searchedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}  
                    onComplete={() => toggleCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
            )}
          </TodoContext.Consumer>
        <TodoNewButton />
      </div>
    </React.Fragment>
  );
}

export { AppUI };