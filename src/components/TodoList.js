import React from 'react';

import './styles/TodoList.css';

function TodoList(props) {
  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}

      {props.searchedTodos.map(todo => props.render(todo))}

      <ul className="TodoList__list">
        {props.children}
      </ul>
    </section>
  );
};

export { TodoList };