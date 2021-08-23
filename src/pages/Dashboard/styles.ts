import styled, { css } from 'styled-components';

type BoxContentProps = {
  borderBottom: 'warning' | 'success' | 'waiting' | 'closed';
};

export const Content = styled.div`
  height: 100%;
  margin-bottom: auto;

  @media screen and (min-width: 576px) {
    height: calc(100% - 70px);
  }
`;

export const Nav = styled.div`
  margin: 40px 0 24px 0;

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  h1 {
    margin: 0;
  }

  span {
    font-size: 16px;
    color: #edf2f7;
  }
`;

export const Stack = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  height: 100%;
  height: 80px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  background: #ffffff;

  & + & {
    margin: 16px 0 0 0;
  }
`;

export const BoxContent = styled.div<BoxContentProps>`
  height: 100%;
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 4px 4px;

  ${(props) =>
    props.borderBottom === 'warning' &&
    css`
      border-bottom: 2px solid #e07a5f;
    `}

  ${(props) =>
    props.borderBottom === 'success' &&
    css`
      border-bottom: 2px solid #2a9d8f;
    `}
    
 ${(props) =>
    props.borderBottom === 'waiting' &&
    css`
      border-bottom: 2px solid #118ab2;
    `}

 ${(props) =>
    props.borderBottom === 'closed' &&
    css`
      border-bottom: 2px solid #2b2d42;
    `}

  > span,
  > h3 {
    color: #2b2d42;
  }

  > span {
    margin: 0 0 4px 0;
    font-size: 16px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
  }
`;
