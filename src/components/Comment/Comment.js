import React from 'react';
import './Comment.scss';

export function Comment() {

  return (
    <form className="comment"><p className="comment__title">Комментарий к заказу</p>
      <textarea  
        placeholder="Укажите особенности въезда на территорию склада или подъезда к адресу">
      </textarea>
    </form>
  );
};