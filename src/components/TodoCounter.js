import React from 'react';

import './styles/TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {

  return (
    <>
      <h2 
        // className={`TodoCounter__title ${loading && 'TodoCounter__title--loading'}`}
        className={`TodoCounter__title ${loading ? 'TodoCounter__title--loading' : null}`}
      >
        Has completado {completedTodos} de {totalTodos} tareas
      </h2>
    </>
  );
};

export { TodoCounter };