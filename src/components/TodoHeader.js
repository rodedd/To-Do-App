import React from 'react';

import './styles/TodoHeader.css';

function TodoHeader() {
  return (
    <header className="TodoHeader">
      <span className="TodoHeader__logo"></span>
      <h1 className="TodoHeader__title">To Do App</h1>
    </header>
  );
};

export { TodoHeader };