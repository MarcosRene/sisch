import day from 'dayjs';

import { Occurrences } from '../../../types';

import * as S from './styles';

export function Box({ id, occurrence, user }: Occurrences) {
  return (
    <S.Box key={id} to={`/ocurrence/${id}`}>
      <S.BoxContent borderBottom={occurrence.status}>
        <img src={user.avatar} alt={`Avatar do usuário ${user.name}`} />

        <S.BoxHeader>
          <div>
            <h5>{user.name}</h5>
            <small>{day(occurrence.date).format('DD/MM/YYYY')}</small>
          </div>
          <span title={occurrence.description}>{occurrence.description}</span>
        </S.BoxHeader>
      </S.BoxContent>
    </S.Box>
  );
}
