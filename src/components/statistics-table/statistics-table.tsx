import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import formattingDate from '../../utils/formatting-date';
import { IPayloadStatistics } from '../../types/statistics';
import { BounceLoader } from '../bounce-loader/bounce-loader';
import ErrorMessage from '../error-message';
import { setStatisticsFetchingError } from '../../store/action-creators/common';

import s from './statistics-table.module.scss';

interface IStatisticsTableProps {
  data: IPayloadStatistics[];
  isLoading: boolean;
  error: string | null;
};

const StatisticsTable: React.FC<IStatisticsTableProps> = ({ data, isLoading, error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return (() => {
      error && dispatch(setStatisticsFetchingError(null));
    });
  }, [dispatch, error]);

  if (error) {
    return (
      <>
        <tr><td colSpan={7}>
          <ErrorMessage error={error} classes={s.error} />
        </td></tr>
      </>
    );
  }

  if (isLoading) {
    return (
      <><tr><td colSpan={7}><BounceLoader /></td></tr></>
    );
  }

  if (!data.length) {
    return (
      <><tr><td colSpan={7}>No statistics yet</td></tr></>
    );
  }

  const statistics = data.map(({
    date, difficulty, email, field, moves, speed, time, userNick, _id }) => {
      return (
        <tr key={_id}>
          <td>{`${userNick} (${email})`}</td>
          <td>{field}</td>
          <td>{speed}</td>
          <td>{difficulty}</td>
          <td>{time}</td>
          <td>{moves}</td>
          <td>{formattingDate(date, false)}</td>
        </tr>
      );
    });

  return (
    <>{statistics}</>
  );
}

export default StatisticsTable;
