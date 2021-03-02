import React from 'react';

import s from './fullscreen-open-icon.module.scss';

interface IFullscreenOpenIconProps {
  styleClass?: string;
};

const FullscreenOpenIcon: React.FC<IFullscreenOpenIconProps> = ({ styleClass = null }) => {
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

export default FullscreenOpenIcon;
