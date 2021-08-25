import styled, { keyframes } from 'styled-components';

import bg from '../../assets/bg.svg';

const fadeIn = keyframes`
  0% { 
    opacity: 0; 
    transition: opacity 1s;
  } 100% { 
    opacity: 1; 
    transition: opacity 1s; 
  }
`;

export const Container = styled.div`
  height: calc(100% - 70px);

  background: url(${bg}) no-repeat;
  background-position: top;
  background-size: contain;

  animation: ${fadeIn} 0.5s;
`;

export const Content = styled.div`
  height: 100%;
  width: 98%;
  padding: 16px;
  margin: 0 auto;

  /* @media screen and (max-width: 414px) {
    overflow-y: scroll;
  } */
`;
