import React from 'react';

import s from './auth-form.module.scss';

interface IAuthErrorProps {
  error: string | null;
};

export const FormAuthError: React.FC<IAuthErrorProps> = ({ error }) => {
  if (error) {
    return (
      <div className={s.form_error}>
        {error}
      </div>
    );
  }

  return null;
};
