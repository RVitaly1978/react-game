import React, { useState } from 'react';

import Button from '../button';
import { TriangleDownIcon, TriangleUpIcon } from '../icons';

import s from './auth-form.module.scss';

interface IPasswordFieldProps {
  value: string;
  onChange: any;
};

export const PasswordField: React.FC<IPasswordFieldProps> = ({ value, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleToggle = () => {
    setIsVisible(s => !s);
  };

  const Icon = isVisible
    ? TriangleUpIcon
    : TriangleDownIcon;

  return (
    <div className={s.form_group}>

      <label htmlFor='password'>Password</label>

      <div className={s.password_field}>
        <input
          type={isVisible ? 'text' : 'password'}
          id='password'
          placeholder='Password'
          value={value}
          onChange={onChange} />

        <Button
          styleClass={s.wrapper_button}
          icon={<Icon styleClass={s.wrapper_button_icon} />}
          onClick={handleVisibleToggle} />
      </div>

    </div>
  );
}