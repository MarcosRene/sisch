import { HTMLAttributes } from 'react';

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type BoxContentProps = HTMLAttributes<HTMLDivElement> & {
  borderBottom: string | React.ReactNode;
};

export const Box = styled(Link)`
  width: 100%;
  min-height: 88px;

  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  background: #ffffff;

  display: flex;
  align-items: center;

  & + & {
    margin: 16px 0 0 0;
  }
`;

export const BoxContent = styled.div<BoxContentProps>`
  width: 100%;
  min-height: 88px;

  padding: 0 16px;

  display: flex;
  align-items: center;

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

  img {
    width: 60px;
    height: 60px;
    margin: 0 8px 0 0;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

export const BoxHeader = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5,
    small {
      line-height: 1.4;
    }

    h5 {
      margin: 0 12px 0 0;
      font-size: 16px;

      font-weight: 400;
      color: #2b2d42;
    }

    small {
      font-size: 14px;
      font-weight: 400;
    }
  }

  span,
  small {
    color: #a8a8b3;
  }

  span {
    width: 216px;
    font-size: 16px;
    line-height: 1.4;
    margin: 4px 0 0 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (min-width: 414px) {
      width: 260px;
    }
  }
`;
