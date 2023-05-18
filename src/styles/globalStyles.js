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
    /* background: rgb(255,255,255);
    background: linear-gradient(263deg, rgba(255,255,255,1) 0%, rgba(163,178,219,1) 100%);
    background-size: cover;
    height: 100vh; */
  }

  h1, h2, h3, h4, h5, h6{
    font-family: "'Montserrat', sans-serif";
  }
`;
