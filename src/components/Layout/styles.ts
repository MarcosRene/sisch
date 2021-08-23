import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 414px;
  height: 100%;
  background: #f5f5f5;

  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.09);

  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 128px;
    height: 12px;

    background: #202123;

    border-radius: 0 0 8px 8px;

    transform: translate(-50%);
  }
`;
