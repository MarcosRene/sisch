import { Layout } from '../../../components';

import { DefaultProps } from '../../../types';

import * as S from './styles';

export function AuthLayout({ children }: DefaultProps) {
  return (
    <Layout>
      <S.Container>{children}</S.Container>
    </Layout>
  );
}
