import React from 'react';
import './Select.scss';
import {SelectBox} from './SelectBox/SelectBox';

export const Select = ({selectTitle, fullWidth, widthBox}) => {

  return (
      <div className={`select ${fullWidth ? "fullWidth" : "halfWidth"}`}>
        <p className="select__title">{selectTitle}</p>
        <SelectBox
          items={[
            { value: "Вариант 1", id: 1 },
            { value: "Вариант 2", id: 2 },
            { value: "Вариант 3", id: 3 },
            { value: "Вариант 4", id: 4 },
            { value: "Вариант 5", id: 5 }
          ]}
          widthBox={widthBox}
        />
      </div>
  )
}