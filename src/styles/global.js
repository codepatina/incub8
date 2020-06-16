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
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }




  .register-form-step-1 {
    background: ${({ theme }) => theme.body};
    transition: background .3s linear;
    color: ${({ theme }) => theme.text}; 
    border: 1px solid #FFAB62;

    
    width: min-content;
    height: max-content;
    font-family: forma-djr-deck, sans-serif;

}

.register-form-step-2 {
  width: 95vw;
  height: 95vh;

}

.register-step-2-section {
    font-display: left-justified;
    font-family: forma-djr-deck, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    border: 1px solid  #ff6c66;
    padding: 20px;
    height: max-content;
}






nav {
    background-color: ${({ theme }) => theme.nav};
    transition: background-color .3s linear;

}

label {
    color: ${({ theme }) => theme.text} !important; 
    transition: color .3s linear;

}

input {
    background: ${({ theme }) => theme.inputBackground} !important;
    border: ${({ theme }) => theme.inputBorder} !important;
    color: ${({ theme }) => theme.text} !important; 
}




button:hover {
    color: ${({ theme }) => theme.text} !important; 


}







.card {
  background-color: ${({ theme }) => theme.inputBackground} !important;
    border: ${({ theme }) => theme.inputBorder} !important;
    color: ${({ theme }) => theme.text} !important; 
    padding: 10px;
}




.bio-section {
}

.ql-editor {
    border: ${({ theme }) => theme.inputBorder} !important;
    height: 200px;
}



.ql-snow .ql-picker-label {
  color: ${({ theme }) => theme.text} !important; 

}



.avatarPlaceholder {
  height: 10vh;
  width: 10vh;
  background-color: #BEBEBE;
  border: ${({ theme }) => theme.inputBorder} !important;

}

.slider {
  background-color: ${({ theme }) => theme.slider};
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 17px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 19px;
}

input:checked + .slider {
  background-color: ${({ theme }) => theme.slider};
  border: 1px solid rgba(255, 255, 255, 0.13);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.profile-button-group {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
`;
