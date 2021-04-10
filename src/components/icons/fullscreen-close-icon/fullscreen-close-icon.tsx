import React from 'react';

import s from './fullscreen-close-icon.module.scss';

interface IFullscreenCloseIconProps {
  styleClass?: string;
};

const FullscreenCloseIcon: React.FC<IFullscreenCloseIconProps> = ({ styleClass = null }) => {
  return (
    <div className={s.icon_container}>
      <div className={s.icon_corner}>
        <span className={`${s.icon_line} ${styleClass}`} />
        <span className={`${s.icon_line} ${styleClass}`} />
      </div>
      <div className={s.icon_corner}>
        <span className={`${s.icon_line} ${styleClass}`} />
        <span className={`${s.icon_line} ${styleClass}`} />
      </div>
      <div className={s.icon_corner}>
        <span className={`${s.icon_line} ${styleClass}`} />
        <span className={`${s.icon_line} ${styleClass}`} />
      </div>
      <div className={s.icon_corner}>
        <span className={`${s.icon_line} ${styleClass}`} />
        <span className={`${s.icon_line} ${styleClass}`} />
      </div>
    </div>
  );
}

export default FullscreenCloseIcon;
