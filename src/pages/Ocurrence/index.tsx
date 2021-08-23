/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft as ArrowLeft } from 'react-icons/fi';

import { database } from '../../services/firebase';
import { useAuth } from '../../contexts/auth';

import { Container, Heading, Spinner } from '../../components';

import * as S from './styles';

type Occurrence = {
  local: string;
  area: string;
  priority: string;
  equipmentCode: string;
  description: string;
  status: string;
};

export function Ocurrence() {
  const history = useHistory();

  const [hasChanged, setHasChanged] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [messageError, setMessageError] = useState('');

  const { user } = useAuth();

  const [occurrence, setOccurrence] = useState<Occurrence>({
    local: '',
    area: '',
    priority: '',
    equipmentCode: '',
    description: '',
    status: 'warning',
  });

  useEffect(() => {
    return;
  }, []);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { value, name } = event.target;

    const values = {
      ...occurrence,
      [name]: value,
    };

    setOccurrence(values);
    setHasChanged(false);
  }

  function handleDiscard() {
    setOccurrence({
      local: '',
      area: '',
      priority: '',
      equipmentCode: '',
      description: '',
      status: '',
    });

    setHasChanged(true);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const occurrenceRef = database.ref('occurrences');

      await occurrenceRef.push({
        occurrence,
        user,
      });

      history.push('/success');
    } catch (error) {
      setMessageError('Erro ao criar o chamado');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <S.GoBack to="/dashboard">
        <ArrowLeft color="#edf2f7" size={28} />
      </S.GoBack>
      <Heading>Novo chamado</Heading>

      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="Local"
          name="local"
          value={occurrence.local}
          onChange={handleChange}
          required
        />

        <S.Select>
          <select
            name="area"
            value={occurrence.area}
            onChange={handleChange}
            required
          >
            <option value="" hidden>
              Selecione uma área
            </option>
            <option value="Informática">Informática</option>
            <option value="Elétrica">Elétrica</option>
            <option value="Predial">Predial</option>
            <option value="Hidraúlica">Hidraúlica</option>
          </select>

          <S.CustomArrow />
        </S.Select>
        <S.Select>
          <select
            name="priority"
            value={occurrence.priority}
            onChange={handleChange}
            required
          >
            <option value="" hidden>
              Selecione uma prioridade
            </option>
            <option value="Urgente">Urgente</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baixa">Baixa</option>
          </select>
          <S.CustomArrow />
        </S.Select>

        <S.InputGroup>
          <S.Input
            type="text"
            placeholder="Tobamento"
            name="equipmentCode"
            value={occurrence.equipmentCode}
            onChange={handleChange}
            minLength={6}
            maxLength={12}
          />
          <span>* Insira caso seja um equipamento.</span>
        </S.InputGroup>

        <S.TextArea
          placeholder="Descrição do problema"
          name="description"
          value={occurrence.description}
          onChange={handleChange}
          required
        />

        <S.GroupButtons>
          <button onClick={handleDiscard} disabled={hasChanged}>
            Cancelar
          </button>
          <button type="submit" disabled={hasChanged}>
            {isLoading ? <Spinner /> : 'Cadastrar'}
          </button>
        </S.GroupButtons>
      </S.Form>
    </Container>
  );
}
