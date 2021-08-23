import { ReactNode, AnchorHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  to: string;
};

export function Button({ children, to, ...res }: ButtonProps) {
  return (
    <S.Container to={to} {...res}>
      {children}
    </S.Container>
  );
}
