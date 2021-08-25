import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const defaultStyles = css`
  width: 100%;
  padding: 0 16px;
  font-size: 16px;
  background: #ffffff;
  color: #a8a8b3;
  border-radius: 4px;
`;

export const GoBack = styled(Link)`
  margin: 24px 0 0 0;
  display: block;
`;

export const Form = styled.form`
  height: calc(100% - 155px);

  display: flex;
  flex-direction: column;
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
`;

export const InputGroup = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;

  span {
    margin: 4px 0 0 0;
    font-size: 14px;
    color: #a8a8b3;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 144px;
  margin: 16px 0 0 0;
  padding: 16px;

  font-size: 16px;

  padding: 16px;
  color: #a8a8b3;

  border: 0;
  border-radius: 4px;

  resize: none;

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const Select = styled.div`
  position: relative;

  select {
    height: 50px;
    margin: 16px 0 0 0;

    ${defaultStyles};

    border: 0;

    appearance: none;
  }
`;

export const CustomArrow = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40px;
  height: calc(100% - 16px);
  background: #cbd5e0;

  border-radius: 0 4px 4px 0;
  display: block;
  pointer-events: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  &:before {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #ffffff;

    top: 40%;
  }

  &:after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #ffffff;

    top: 60%;
  }
`;

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;

  margin: auto 0 0 0;

  button {
    width: 100%;
    height: 50px;
    border-radius: 4px;

    font-size: 16px;

    font-size: 16px;
    font-weight: 500;
    color: #edf2f7;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 180ms ease-in-out;

    &:first-child {
      margin: 0 8px 0 0;
      background: #e07a5f;
    }

    &:last-child {
      background: #2a9d8f;
    }

    &:hover {
      filter: brightness(0.8);
    }

    &:disabled {
      filter: brightness(0.8);
      cursor: not-allowed;
    }
  }
`;
