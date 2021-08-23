import * as S from './styles';

export function Spinner() {
  return (
    <S.SpinnerWrapper viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" />
    </S.SpinnerWrapper>
  );
}
