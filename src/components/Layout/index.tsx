import { DefaultProps } from '../../types';

import * as S from './styles';

export function Layout({ children }: DefaultProps) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
