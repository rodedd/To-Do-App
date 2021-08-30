import React from 'react';

import './styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}></span>
      <p className={`TodoItem__content ${props.completed && 'TodoItem__content--completed'}`}>{props.text}</p>
      <span className="Icon Icon-delete"></span>
    </li>
  );
};

export { TodoItem };