import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type ContentProps = HTMLAttributes<HTMLDivElement> & {
  background: string | React.ReactNode;
};

const defaultStyles = css`
  width: 100%;
  padding: 0 16px;
  font-size: 16px;
  background: #ffffff;
  color: #a8a8b3;
  border-radius: 4px;
`;

export const Nav = styled.div`
  margin: 24px 0 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBack = styled(Link)`
  display: block;
`;

export const Square = styled.div<ContentProps>`
  width: 30px;
  height: 30px;
  border-radius: 30px;

  ${(props) =>
    props.background === 'warning' &&
    css`
      background: #e07a5f;
    `}

  ${(props) =>
    props.background === 'success' &&
    css`
      background: #2a9d8f;
    `}
    
 ${(props) =>
    props.background === 'waiting' &&
    css`
      background: #118ab2;
    `}

 ${(props) =>
    props.background === 'closed' &&
    css`
      background: #2b2d42;
    `}
`;

export const Content = styled.div`
  height: 100%;
  margin: 40px 0 auto 0;
`;

export const Input = styled.input`
  height: 50px;

  ${defaultStyles};

  border: 0;

  &::placeholder {
    color: #a8a8b3;
  }

  & + & {
    margin: 16px 0 0 0;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Field = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;

  label {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 500;
    color: #a8a8b3;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 144px;
  padding: 16px;

  font-size: 16px;

  padding: 16px;
  color: #a8a8b3;

  border: 0;
  border-radius: 4px;

  resize: none;
  cursor: not-allowed;

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 100%;
  margin: auto 0 0 0;
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
