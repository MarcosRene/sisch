import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 360px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
    height: 100%;
    display: block;
  }

  h2,
  span {
    color: #edf2f7;
  }

  h2 {
    margin: 64px 0;
    font-size: 32px;
    font-weight: 600;
  }

  span {
    margin: 0 0 24px;
    font-size: 18px;

    display: block;
  }

  button {
    min-width: 280px;
    height: 50px;
    margin: 0 auto;

    font-size: 16px;
    font-weight: 500;

    border-radius: 4px;
    color: #edf2f7;
    background: #000d16;

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      margin: 0 16px 0 0;
    }

    transition: filter 180ms ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
