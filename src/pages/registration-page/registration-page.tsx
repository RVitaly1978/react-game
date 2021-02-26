import React from 'react';

import RegistrationForm from '../../components/registration-form';

import s from './registration-page.module.scss';

const RegistrationPage: React.FC = () => {
  return (
    <div className={s.container}>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
