import React from 'react';

import './styles/TodoNewButton.css';

function TodoNewButton(props) {

  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
  }

  return (
    <button 
      className="TodoNewButton"
      onClick={onClickButton}  
    >
      +
    </button>
  );
};

export { TodoNewButton };