import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
    font-family: "'Open Sans', sans-serif";
    background: rgb(81,16,143);
    background: linear-gradient(128deg, rgba(81,16,143,1) 0%, rgba(141,47,156,1) 100%);
  }

  h1, h2, h3, h4, h5, h6{
    font-family: "'Montserrat', sans-serif";
  }
`;
