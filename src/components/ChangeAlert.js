import React from 'react';
import { useStorageListener } from './useStorageListener';

import './styles/ChangeAlert.css';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if(show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>Parece que cambiaste tus TODOs en otra ventana o pestaña del navegador.</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button 
            onClick={() => toggleShow(false)}
            className='TodoForm-button TodoForm-button--add'
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export { ChangeAlert };