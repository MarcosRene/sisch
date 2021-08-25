import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;

  background: #f9f9f9;
  border-top: 1px solid rgba(0, 0, 0, 0.09);

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const IconLink = styled(NavLink)`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    stroke-width: 2.2px;
  }

  &.active {
    > svg {
      color: #004b82;
      stroke: #004b82;
    }

    &::after {
      background: #004b82;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: transparent;
  }
`;
