import { useOccurrences } from '../../hooks/useOccurrences';

import { Container, Header, Heading } from '../../components';
import { Button } from '../../components/Button';

import * as S from './styles';

export function Dashboard() {
  const { occurrences } = useOccurrences();

  const openOccurrences = occurrences.filter(
    (occurrence) => !occurrence.endedAt
  );

  const closedOccurrences = occurrences.length - openOccurrences.length;

  return (
    <Container>
      <S.Content>
        <Header />
        <S.Nav>
          <Heading>Dashboard</Heading>
          <span>Total: {occurrences.length}</span>
        </S.Nav>
        <S.Stack>
          <S.Box>
            <S.BoxContent borderBottom="warning">
              <span>Não atendidos</span>
              <h3>{openOccurrences.length}</h3>
            </S.BoxContent>
          </S.Box>
          {/* <S.Box>
            <S.BoxContent borderBottom="success">
              <span>Em atendimento</span>
              <h3>7</h3>
            </S.BoxContent>
          </S.Box>
          <S.Box>
            <S.BoxContent borderBottom="waiting">
              <span>Aguardando terceiros</span>
              <h3>7</h3>
            </S.BoxContent>
          </S.Box> */}
          <S.Box>
            <S.BoxContent borderBottom="closed">
              <span>Encerrados</span>
              <h3>{closedOccurrences}</h3>
            </S.BoxContent>
          </S.Box>
        </S.Stack>
      </S.Content>
      <Button to="/new-ocurrence">Novo chamado</Button>
    </Container>
  );
}
