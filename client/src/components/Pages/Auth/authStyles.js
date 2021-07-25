import styled from 'styled-components';

export const AuthStyles = styled.div`
  padding: 50px 0;

  .form-container {
    background: #fff;
    width: 300px;
    height: 400px;
    position: relative;
    text-align: center;
    padding: 20px 0;
    margin: auto;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
    background: red;
  }
  .form-container span {
    font-weight: bold;
    padding: 0 10px;
    color: #000;
    cursor: pointer;
    width: 100px;
    display: inline-block;
  }
  .form-btn {
    display: inline-block;
  }

  .form-container form {
    max-width: 300px;
    padding: 0 20px;
    position: absolute;
    top: 130px;
  }
  form input {
    width: 100%;
    height: 30px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #000;
  }

  form .btn {
    width: 100%;
    border: none;
    cursor: pointer;
    margin: 10px 0;
  }

  form .btn:focus {
    outline: none;
  }

  #login {
    left: -300px;
    transform: ${({ selected }) => selected && 'translateX(300px)'};
  }
  #register {
    left: 0px;
    /* transform: ${({ selected }) => selected && 'translateY(10px)'}; */
    background: ${({ selected }) => (selected ? 'blue' : 'green')};
  }

  form a {
    font-size: 12px;
    text-decoration: none;
    color: #000;
  }
  #indicator {
    width: 100px;
    border: none;
    background: #000;
    height: 3px;
    margin-top: 8px;
    transform: translateX(100px);
  }
`;
