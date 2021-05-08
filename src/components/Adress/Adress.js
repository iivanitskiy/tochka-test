import React from 'react';
import './Adress.scss';

export function Adress({className}) {

  return (

  <form className={className}>
      <input
        type="text"
        placeholder="Адрес не указан"
      />
      <button>НЕ ВЫБРАНО</button>
  </form>
  );
};
