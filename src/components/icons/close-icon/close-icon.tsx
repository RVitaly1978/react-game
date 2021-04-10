import React from 'react';

import s from './close-icon.module.scss';

interface ICloseIconProps {
  styleClass?: string | null;
};

const CloseIcon: React.FC<ICloseIconProps> = ({ styleClass = null }) => {
  return (
    <div className={s.icon_container}>
      <span className={`${s.icon_line} ${styleClass}`} />
      <span className={`${s.icon_line} ${styleClass}`} />
    </div>
  );
}

export default CloseIcon;
