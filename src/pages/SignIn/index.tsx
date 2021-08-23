import { FcGoogle as Google } from 'react-icons/fc';

import { useAuth } from '../../contexts/auth';

import support from '../../assets/support.svg';
import * as S from './styles';

export function SignIn() {
  const { signInWithGoogle } = useAuth();

  return (
    <S.Container>
      <S.Content>
        <img src={support} alt="Imagem de dois bonecos" />

        <h2>Controle seus chamados de forma simples</h2>

        <span>
          Faça login com a sua
          <br /> conta do Goolge
        </span>

        <button onClick={signInWithGoogle}>
          <Google size={30} />
          Entrar com Google
        </button>
      </S.Content>
    </S.Container>
  );
}
