import React from 'react';
import './Checkbox.scss';
import {Form} from '../Form/Form';

export function Checkbox() {
  const [checked, setChecked] = React.useState(false);

  return (
    <React.Fragment>
      <label className="checkbox">
        <span>
          <input type="checkbox" 
            checked={checked} 
            onChange={() => setChecked(!checked)}
          />          
          <span></span>
        </span>
        <p className="checkbox__text">Требуется температурный режим</p>
      </label>
      {checked && (   
        <div className="checkbox__container">
          <div style={{marginRight: 12}}>
            <Form formTitle="От, °C" placeHolder="0" fullWidth={false} />
          </div>
          <Form formTitle="До, °C" placeHolder="0" fullWidth={false}/> 
        </div>      
      )} 
    </React.Fragment>
  );
}
