import React from 'react';
import './Form.scss';

export function Form({formTitle, placeHolder, fullWidth}) {

  return (
    <div className={`form ${fullWidth ? "fullWidth" : "halfWidth"}`}>
      <div className="form__field">
        <p className="form__title">{formTitle}</p>
        <input
          type="text"
          placeholder={placeHolder}
        />
        </div>
    </div>
  );
};