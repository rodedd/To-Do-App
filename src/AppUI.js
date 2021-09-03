import React from 'react';

import { TodoContext } from './components/TodoContext';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearchbar } from './components/TodoSearchbar';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoNewButton } from './components/TodoNewButton';
import { TodoHeader } from './components/TodoHeader';
import { TodoForm } from './components/TodoForm';
import { Modal } from './components/Modal';
import { TodosError } from './components/TodosError.js'
import { TodosLoading } from './components/TodosLoading.js'
import { EmptyTodos } from './components/EmptyTodos.js'

function AppUI() {

  const {
    loading, 
    error, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader />
      <div className="App_main">
        <TodoCounter />
        <TodoSearchbar />
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError error={error} />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}
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

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}

        <TodoNewButton
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </React.Fragment>
  );
}

export { AppUI };