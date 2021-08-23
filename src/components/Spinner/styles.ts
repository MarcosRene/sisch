import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
 `;

export const SpinnerWrapper = styled.svg`
  width: 20px;
  height: 20px;
  animation: ${rotate} 2s linear infinite;

  flex-shrink: 0;

  > circle {
    fill: none;
    stroke: #edf2f7;
    stroke-width: 5px;
    stroke-linecap: round;
    animation: ${dash} 1.75s ease-in-out infinite;
  }
`;
