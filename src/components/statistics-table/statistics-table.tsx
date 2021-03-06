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
      <><tr className={s.table_row}>
        <td colSpan={7} className={s.table_cell__info}>
          <ErrorMessage error={error} classes={s.error} />
        </td>
      </tr></>
    );
  }

  if (isLoading) {
    return (
      <><tr className={s.table_row}>
        <td colSpan={7} className={s.table_cell__info}>
          <BounceLoader styleClass={s.loader} />
        </td>
      </tr></>
    );
  }

  if (!data.length) {
    return (
      <><tr className={s.table_row}>
        <td colSpan={7} className={s.table_cell__info}>
          No statistics yet
        </td>
      </tr></>
    );
  }

  const statistics = data.map(({
    date, difficulty, email, field, moves, speed, time, userNick, _id }) => {
      return (
        <tr key={_id} className={s.table_row}>
          <td className={s.table_cell__name}>
            <p>{userNick}</p>
            <p>{`(${email})`}</p>
          </td>
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
    <table className={s.table}>
      <tbody className={s.table_body}>
        <tr className={s.table_head}>
          <td>user</td>
          <td>field</td>
          <td>speed</td>
          <td>difficulty</td>
          <td>time</td>
          <td>moves</td>
          <td>date</td>
        </tr>
        {statistics}
      </tbody>
    </table>
  );
}

export default StatisticsTable;
