import React from 'react';

import InputRadio from '../input-radio';

import s from './input-switcher.module.scss';

export interface IInputItem {
  label: string;
  isChecked: boolean;
};

export interface IInputSwitcherProps {
  items: IInputItem[];
  name: string;
  setValue: ((value: string, name: string) => void);
  styleClass?: string | null;
  styleLabel?: string | null;
};

const InputSwitcher: React.FC<IInputSwitcherProps> = ({
  items = [], setValue, name, styleClass, styleLabel,
}) => {

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setValue(value, name);
  };

  const InputItems = items.map(({ label, isChecked }) => {
    return (
      <li key={label} className={s.item}>
        <InputRadio
          styleClass={`${s.item_radio} ${styleClass}`}
          styleLabel={styleLabel}
          id={label}
          value={label}
          isChecked={isChecked}
          onChange={handleChange}
          label={label} />
      </li>
    );
  });

  return (
    <ul className={s.container} >
      {InputItems}
    </ul>
  );
}

export default InputSwitcher;