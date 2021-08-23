/* eslint-disable @typescript-eslint/no-unused-vars */
import { FiArrowLeft as ArrowLeft } from 'react-icons/fi';

import { useOccurrences } from '../../hooks/useOccurrences';

import { Container, Heading } from '../../components';

import { Box } from './Box';

import * as S from './styles';

function NoData() {
  return <S.NoData> Você não possui chamados.</S.NoData>;
}

export function OcurrenceList() {
  const { occurrences } = useOccurrences();

  return (
    <Container>
      <S.GoBack to="/dashboard">
        <ArrowLeft color="#edf2f7" size={28} />
      </S.GoBack>
      {occurrences.length !== 0 && <Heading>Todos chamados</Heading>}
      <S.Stack>
        {occurrences.length === 0 ? (
          <NoData />
        ) : (
          occurrences.map((occurrence) => (
            <Box
              key={occurrence.id}
              id={occurrence.id}
              occurrence={occurrence.occurrence}
              user={occurrence.user}
            />
          ))
        )}
      </S.Stack>
    </Container>
  );
}
