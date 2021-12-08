import React from 'react';

import { useTodos } from './components/useTodos';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearchbar } from './components/TodoSearchbar';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoNewButton } from './components/TodoNewButton';
import { TodoHeader } from './components/TodoHeader';
import { TodoForm } from './components/TodoForm';
import { Modal } from './components/Modal';
import { TodosError } from './components/TodosError.js';
import { TodosLoading } from './components/TodosLoading.js';
import { EmptyTodos } from './components/EmptyTodos.js';
import { ChangeAlert } from './components/ChangeAlert';

import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de intro a React', completed: false},
//   { text: 'Llorar con la llorona', completed: true},
// ]

function App() {

  const {
    loading, 
    error, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader />
      <div className="App_main">
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        <TodoSearchbar 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />

        <TodoList 
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
          // Render Props
          // render={todo => (
          //   <TodoItem
          //     key={todo.text}
          //     text={todo.text}
          //     completed={todo.completed}  
          //     onComplete={() => toggleCompleteTodo(todo.text)}
          //     onDelete={() => deleteTodo(todo.text)}
          //   />
          // )}
        >
          {/* Render Function */}
          {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}  
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}

        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm 
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}

        <TodoNewButton
          openModal={openModal}
          setOpenModal={setOpenModal}
        />

        <ChangeAlert 
          sincronize={sincronizeTodos}
        />
      </div>
    </React.Fragment>
  );
}

export { App };
