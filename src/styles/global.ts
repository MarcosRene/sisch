import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${() => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body {
      font: 16px 'Roboto', ---apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;

      background: #f5f5f5;
    }

    *:focus {
      transition: box-shadow 180ms ease-in-out;
      outline: 2px solid transparent;
      box-shadow: 0 0 0 3px #63b3ed;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Inter';
    }

    input,
    select,
    textarea,
    button {
      font-family: 'Roboto';
    }

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  `}
`;
