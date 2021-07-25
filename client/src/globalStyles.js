import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}

.info-toast{
    color: #000;
    background: #fff;
}

`;

export const SearchStyles = styled.div`
  width: 100%;
  padding: 20px 10px;

  form {
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
  input {
    width: 25%;
    border: 1px solid #000;
    height: 3vh;
    font-family: Poppins;
    font-size: 1rem;
    color: #000;
    outline: none;
    padding: 10px;
  }
`;
export default GlobalStyle;
