import React from 'react';

import './styles/TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <>
      <h2 className="TodoCounter__title">Has completado {completedTodos} de {totalTodos} tareas</h2>
    </>
  );
};

export { TodoCounter };