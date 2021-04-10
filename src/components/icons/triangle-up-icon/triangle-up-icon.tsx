import React from 'react';

import s from './triangle-up-icon.module.scss';

interface ITriangleUpIconProps {
  iconTitle?: string;
  styleClass?: string;
};

const TriangleUpIcon: React.FC<ITriangleUpIconProps> = ({ styleClass = null }) => {
  return (
    <div className={s.icon_container}>
      <div className={`${s.icon_figure} ${styleClass}`} />
    </div>
  );
}

export default TriangleUpIcon;
