import React from 'react';

import s from './triangle-down-icon.module.scss';

interface ITriangleDownIconProps {
  iconTitle?: string;
  styleClass?: string;
};

const TriangleDownIcon: React.FC<ITriangleDownIconProps> = ({ styleClass = null }) => {
  return (
    <div className={s.icon_container}>
      <div className={`${s.icon_figure} ${styleClass}`} />
    </div>
  );
}

export default TriangleDownIcon;
