import React from 'react';

import s from './button.module.scss';

export interface IButtonProps {
  id?: string | undefined;
  onClick?: undefined | (() => void);
  isDisabled?: boolean;
  icon?: any;
  styleClass?: string | null;
  dataTitle?: string | null;
  dataPlacement?: string | null;
};

const Button: React.FC<IButtonProps> = ({
  id = undefined,
  onClick = () => {},
  isDisabled = false,
  icon = null,
  styleClass = null,
  dataTitle = null,
  dataPlacement = null,
}) => {
  return (
    <button
      className={`${s.button_container} ${styleClass}`}
      type='button'
      id={id}
      disabled={isDisabled}
      onClick={onClick}
      data-title={dataTitle}
      data-placement={dataPlacement}
    >
      {icon}
    </button>
  );
}

export default Button;
