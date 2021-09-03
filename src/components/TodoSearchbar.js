import React from 'react';

import { TodoContext } from './TodoContext';

import './styles/TodoSearchbar.css';

function TodoSearchbar() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value)
  }

  return (
    <input 
      className="TodoSearchbar__input"
      placeholder="Buscar..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export { TodoSearchbar };