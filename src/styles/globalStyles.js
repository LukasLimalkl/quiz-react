import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
    min-height: 100vh;
    height: 100%;
  }
  body{
    font-size: 1.6rem;
    font-family: "'Open Sans', sans-serif";
    background: rgb(81,16,143);
    background: linear-gradient(128deg, rgba(81,16,143,1) 0%, rgba(141,47,156,1) 100%);
  }

img{
  max-width: 100%;
  padding-top: 2rem;
}



button{
    background: rgb(22, 16, 87);
    background: linear-gradient(
        128deg,
        rgba(22, 16, 87, 1) 0%,
        rgba(63, 19, 103, 1) 27%
    );
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  padding: .8rem 1.5rem;
  background-color: black;
  border: none;
  border-radius: 3rem;
  transition: 700ms ease-in-out;
}

button:hover{
  background: white;
  color: rgb(22, 16, 87);
}

  h1, h2, h3, h4, h5, h6{
    font-family: "'Montserrat', sans-serif";
  }
`;
