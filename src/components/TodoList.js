import React from 'react';

import './styles/TodoList.css';

function TodoList(props) {

  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}


      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

      <ul className="TodoList__list">
        {props.children}
      </ul>
    </section>
  );
};

export { TodoList };