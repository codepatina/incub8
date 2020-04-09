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
    font-weight: 100 !important;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  form {
    border: 1px solid  #FFAB62;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; 

    border-radius: 5px;
    padding-top: 40px;
    padding-left:  20px;
    padding-right: 20px;
    width: min-content;
    margin: 100px auto;
    height: 620px;
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
