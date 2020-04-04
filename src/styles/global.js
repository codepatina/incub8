import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html, body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; 
    font-family: forma-djr-deck, sans-serif;
    transition: all 0.25s linear;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    min-width:xxpx; 
  }

  form {
    border: 1px solid  #FFAB62;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; 

    border-radius: 5px;
    padding: 20px;
    width: min-content;
    height: 620px;
    margin: 150px auto;
    font-family: forma-djr-deck, sans-serif;

}

nav {
    background-color: ${({ theme }) => theme.nav};
}

label {
    color: ${({ theme }) => theme.text} !important; 

}

input {
    background: ${({ theme }) => theme.inputBackground} !important;
    border: ${({ theme }) => theme.inputBorder} !important;
    color: ${({ theme }) => theme.text} !important; 
}


button:hover {
    color: ${({ theme }) => theme.text} !important; 

}



textarea {
    background-color: ${({ theme }) => theme.inputBackground} !important;
    border: ${({ theme }) => theme.inputBorder} !important;
    color: ${({ theme }) => theme.text} !important; 
}
`;
