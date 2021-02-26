import React from 'react';
import { useSelector } from 'react-redux';

import RegistrationForm from '../../components/registration-form';

import s from './registration-page.module.scss';

const RegistrationPage: React.FC = () => {
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className={s.container}>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
