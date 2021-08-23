import * as S from './styles';

import { DefaultProps } from '../../types';

export function Container({ children }: DefaultProps) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
