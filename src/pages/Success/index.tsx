/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Animation from 'react-lottie';

import { DEFAULT_OPTIONS } from '../../constants';

import * as S from './styles';

export function Success() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/ocurrences');
    }, 3000);
  }, []);

  return (
    <S.Container>
      <Animation options={DEFAULT_OPTIONS} height={160} width={160} />
    </S.Container>
  );
}
