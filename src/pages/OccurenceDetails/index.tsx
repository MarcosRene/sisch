import { useHistory, useParams } from 'react-router-dom';
import { FiArrowLeft as ArrowLeft } from 'react-icons/fi';

import { useOccurrence } from '../../hooks/useOccurrence';

import { database } from '../../services/firebase';

import { Container } from '../../components';

import * as S from './styles';

type Params = {
  id: string;
};

export function OcurrenceDetails() {
  const { id: occurrenceId } = useParams<Params>();

  const history = useHistory();

  const { occurrence } = useOccurrence(occurrenceId);

  async function handleEndOccurrence() {
    await database.ref(`occurrences/${occurrenceId}`).update({
      endedAt: new Date(),
    });

    history.push('/dashboard');
  }

  return (
    <Container>
      <S.Nav>
        <S.GoBack to="/ocurrences">
          <ArrowLeft color="#edf2f7" size={28} />
        </S.GoBack>
        <S.Square background={occurrence?.occurrence.status} />
      </S.Nav>

      <S.Content>
        <S.Field>
          <label htmlFor="local">Local</label>
          <S.Input value={occurrence?.occurrence.local} disabled />
        </S.Field>

        <S.Field>
          <label htmlFor="area">Área</label>
          <S.Input id="area" value={occurrence?.occurrence.area} disabled />
        </S.Field>

        <S.Field>
          <label htmlFor="priority">Prioridade</label>
          <S.Input
            id="priority"
            value={occurrence?.occurrence.priority}
            disabled
          />
        </S.Field>

        <S.Field>
          <label htmlFor="equipmentCode">Tombamento</label>
          <S.Input
            id="equipmentCode"
            value={occurrence?.occurrence.equipmentCode}
            disabled
          />
        </S.Field>

        <S.Field>
          <label htmlFor="description">Descrição</label>
          <S.TextArea
            id="description"
            value={occurrence?.occurrence.description}
          />
        </S.Field>
      </S.Content>

      <S.Button type="button" onClick={handleEndOccurrence}>
        Encerrar chamado
      </S.Button>
    </Container>
  );
}
