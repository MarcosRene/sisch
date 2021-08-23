import { IconType } from 'react-icons/lib';

import { GENERAL_MENU } from './constants';

import * as S from './styles';

type NavigationProps = {
  path: string;
  icon: IconType;
};

export function Navigation() {
  return (
    <S.Container>
      {Object.entries(GENERAL_MENU).map(([, { path, icon }]) => (
        <Icons key={path} path={path} icon={icon} />
      ))}
    </S.Container>
  );
}

function Icons({ path, icon: Icon }: NavigationProps) {
  return (
    <S.IconLink to={path} activeClassName="active">
      <Icon color="#FFB400" size={26} />
    </S.IconLink>
  );
}
