import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px 0 0 0;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin: 0;
    padding: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 49px;
    height: 49px;
    margin: 0 16px 0 0;
    border-radius: 50%;
    background: orange;
  }

  span {
    color: #edf2f7;
  }
`;
