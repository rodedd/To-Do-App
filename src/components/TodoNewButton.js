import React from 'react';

import './styles/TodoNewButton.css';

function TodoNewButton(props) {
  return (
    <button 
      className="TodoNewButton"
      onClick={() => console.log('clic')}  
    >
      +
    </button>
  );
};

export { TodoNewButton };