import { FiLogOut as SingOut } from 'react-icons/fi';

import { useAuth } from '../../contexts/auth';

import * as S from './styles';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <S.Container>
      <S.Content>
        <S.Profile>
          <img
            src={user?.avatar}
            alt={`Imagem redonda do usuário ${user?.name}`}
          />
          <span>
            Olá,
            <br /> {user?.name}!
          </span>
        </S.Profile>

        <button onClick={signOut}>
          <SingOut color="#FFB400" size={28} />
        </button>
      </S.Content>
    </S.Container>
  );
}
