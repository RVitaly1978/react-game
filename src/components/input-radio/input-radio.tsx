import React from 'react';

import s from './input-radio.module.scss';

export interface IInputRadioProps {
  id: string;
  value: string;
  label: string;
  isChecked: boolean;
  onChange: ((evt: React.ChangeEvent<HTMLInputElement>) => void);
  styleClass?: string | null;
  styleLabel?: string | null;
};

const InputRadio: React.FC<IInputRadioProps> = ({
  id, value, isChecked, onChange, styleClass, label, styleLabel,
}) => {
  return (
    <span className={`${s.container} ${styleClass}`}>

      <input className={s.input}
        type='radio'
        id={id}
        value={value}
        checked={isChecked}
        onChange={onChange} />

      <label className={`${s.label} ${styleLabel}`}
        htmlFor={id}
      >{label}</label>

    </span>
  );
}

export default InputRadio;
