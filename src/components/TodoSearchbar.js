import React from 'react';

import './styles/TodoSearchbar.css';

function TodoSearchbar({ searchValue, setSearchValue, loading }) {

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
      disabled={loading}
    />
  );
};

export { TodoSearchbar };