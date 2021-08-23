import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  height: 50px;
  width: 100%;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  color: #edf2f7;
  background: #000d16;

  transition: filter 180ms ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;
