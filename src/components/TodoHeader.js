import React from 'react';

import './styles/TodoHeader.css';

function TodoHeader({ children }) {
  return (
    <header className="TodoHeader">
      <span className="TodoHeader__logo"></span>
      <h1 className="TodoHeader__title">To Do App</h1>
      {children}
    </header>
  );
};

export { TodoHeader };