import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

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
    background: rgb(0,143,238);
    background: radial-gradient(circle, rgba(0,143,238,1) 0%, rgba(1,74,169,1) 100%);
  }

  h1, h2, h3, h4, h5, h6{
    font-family: "'Montserrat', sans-serif";
  }
`;
