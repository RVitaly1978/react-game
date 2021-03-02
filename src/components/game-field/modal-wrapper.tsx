import React from 'react';

import s from './game-field.module.scss';

export const ModalWrapper: React.FC = ({ children }) => {
  return (
    <div className={s.modal_wrapper}>
      <div className={s.modal_overlay}></div>
      <div className={s.modal_content}>
        {children}
      </div>
    </div>
  );
};
