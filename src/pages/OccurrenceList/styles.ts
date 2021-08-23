import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBack = styled(Link)`
  margin: 24px 0 0 0;
  display: block;
`;

export const Stack = styled.div``;

export const NoData = styled.div`
  height: 112px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: 500;
  color: #edf2f7;
`;
