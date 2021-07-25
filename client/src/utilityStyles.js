import { Link } from 'react-router-dom';
import styled from 'styled-components';

//Containers
export const ContainerNormal = styled.div`
  max-width: 1300px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
`;
export const ContainerSmall = styled.div`
  max-width: 1080px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
`;
// Rows
export const RowNormal = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;

  @media only screen and (max-width: 600px) {
    text-align: center;
  } ;
`;

// Columns
export const Column2 = styled.div`
  flex-basis: 50%;
  min-width: 300px;

  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  } ;
`;
export const Column4 = styled.div`
  flex-basis: 25%;
  min-width: 200px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 50px;
  transition: transform 0.5s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  } ;
`;

export const Column5 = styled.div`
  width: 160px;
`;
// spinner styles
export const SpinnerStyles = styled.div`
  .spinner {
    margin: ${({ small }) => (small ? '50px auto' : '200px auto')};
    width: ${({ small }) => (small ? '30px' : '60px')};
    height: ${({ small }) => (small ? '30px' : '60px')};
    position: relative;
    text-align: center;

    -webkit-animation: sk-rotate 2s infinite linear;
    animation: sk-rotate 2s infinite linear;
  }

  .dot1,
  .dot2 {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: #000;
    border-radius: 100%;

    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .dot2 {
    top: auto;
    bottom: 0;
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes sk-rotate {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes sk-rotate {
    100% {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`;

//error page

export const ErrorPageStyles = styled.div`
  #notfound {
    position: relative;
    height: 100vh;
  }

  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .notfound {
    max-width: 767px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
    padding: 15px;
  }

  .notfound .notfound-404 {
    position: relative;
    height: 220px;
  }

  .notfound .notfound-404 h1 {
    font-family: 'Poppins', sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 186px;
    font-weight: 200;
    margin: 0px;
    background: #000;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    text-transform: uppercase;
  }

  .notfound h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 33px;
    font-weight: 200;
    text-transform: uppercase;
    margin-top: 0px;
    margin-bottom: 25px;
    letter-spacing: 3px;
  }

  .notfound p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 200;
    margin-top: 0px;
    margin-bottom: 25px;
  }

  .notfound a {
    font-family: 'Poppins', sans-serif;
    color: #ff0000;
    font-weight: 200;
    text-decoration: none;
    border-bottom: 1px dashed #ff0000;
    border-radius: 2px;
  }

  .notfound-social > a {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 40px;
    font-size: 14px;
    color: #000;
    border: 1px solid #000;
    border-radius: 50%;
    margin: 3px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }
  .notfound-social > a:hover {
    color: #fff;
    background-color: #000;
    border-color: #ccc;
  }

  @media only screen and (max-width: 480px) {
    .notfound .notfound-404 {
      position: relative;
      height: 168px;
    }

    .notfound .notfound-404 h1 {
      font-size: 142px;
    }

    .notfound h2 {
      font-size: 22px;
    }
  }
`;

//Images
export const Image = styled.img`
  padding: 25px;
  margin: auto;
  background: ${({ withBg }) => withBg && '#000'};
  max-width: ${({ xlarge, large, medium, small, xsmall }) =>
    xlarge
      ? '100%'
      : large
      ? '75%'
      : medium
      ? '50%'
      : small
      ? '25%'
      : xsmall && '12.5%'};
`;
export const ImageContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Buttons
export const Button = styled(Link)`
  width: 30%;
  margin: auto;
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 10px 20px;
  /* black btn */
  background: ${({ dark }) => dark && '#000'};
  color: ${({ dark }) => dark && '#fff'};
  /* light btn */
  background: ${({ light }) => light && '#fff'};
  color: ${({ light }) => light && '#000'};
  border: ${({ light }) => light && '1px solid #000'};

  &:hover {
    /* black btn */
    background: ${({ dark }) => dark && '#fff'};
    color: ${({ dark }) => dark && '#000'};
    border: ${({ dark }) => dark && '1px solid #000'};
    /* light btn */
    background: ${({ light }) => light && '#000'};
    color: ${({ light }) => light && '#fff'};
    border: ${({ light }) => light && '1px solid #fff'};
  }
`;

export const ButtonRegular = styled.button`
  text-align: center;
  padding: 10px 20px;
  border: none;
  /* black btn */
  background: ${({ dark }) => dark && '#000'};
  color: ${({ dark }) => dark && '#fff'};
  /* light btn */
  background: ${({ light }) => light && '#fff'};
  color: ${({ light }) => light && '#000'};

  &:hover {
    /* black btn */
    background: ${({ dark }) => dark && '#fff'};
    color: ${({ dark }) => dark && '#000'};
    border: ${({ dark }) => dark && '1px solid #000'};
    /* light btn */
    background: ${({ light }) => light && '#000'};
    color: ${({ light }) => light && '#fff'};
    border: ${({ light }) => light && '1px solid #fff'};
  }
`;

export const TableContainer = styled.div`
  h2 {
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    padding: 30px 0;
  }

  /* Table Styles */

  .table-wrapper {
    margin: 30px 70px 70px;
    box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  }

  .fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
  }

  .fl-table td,
  .fl-table th {
    text-align: center;
    padding: 8px;
  }

  .fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
  }

  .fl-table td .table-icons {
    color: #000;
    margin: 10px 20px;
  }

  .fl-table thead th {
    color: #fff;
    background: #000;
  }

  /* Responsive */

  @media (max-width: 767px) {
    .fl-table {
      display: block;
      width: 100%;
    }
    .table-wrapper:before {
      content: 'Scroll horizontally >';
      display: block;
      text-align: right;
      font-size: 11px;
      color: white;
      padding: 0 0 10px;
    }
    .fl-table thead,
    .fl-table tbody,
    .fl-table thead th {
      display: block;
    }
    .fl-table thead th:last-child {
      border-bottom: none;
    }
    .fl-table thead {
      float: left;
    }
    .fl-table tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
    }
    .fl-table td,
    .fl-table th {
      padding: 20px 0.625em 0.625em 0.625em;
      height: 60px;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 120px;
      font-size: 13px;
      text-overflow: ellipsis;
    }
    .fl-table thead th {
      text-align: left;
      border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
      display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
      background: none;
    }
    .fl-table tr:nth-child(even) {
      background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
      background: #f8f8f8;
      border-right: 1px solid #e6e4e4;
    }
    .fl-table tr td:nth-child(even) {
      border-right: 1px solid #e6e4e4;
    }
    .fl-table tbody td {
      display: block;
      text-align: center;
    }
  }
`;

export const FormContainer = styled.div`
  .container {
    width: 100%;
    margin: 3.2rem auto 0 auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  header {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-weight: 400;
  }

  #description {
    font-weight: 200;
    font-style: italic;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  #survey-form {
    color: #fff;
    background: #000;
    padding: 2.3rem 0.5rem;
  }

  .form-input {
    margin: 0 2.5rem 1.2rem 2rem;
  }

  .form-input-size {
    display: block;
    width: 100%;
    height: 1.5rem;
    padding: 0.3rem 0.4rem;
    outline: 0;
    border-style: none;
    margin-top: 0.4rem;
  }
  p {
    font-size: 1.12rem;
  }

  #radio-btn,
  #check-box {
    margin-right: 0.5rem;
    min-height: 1.2rem;
    min-width: 1.2rem;
    color: #fff;
  }

  /* input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #ffa500;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  } */

  label {
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
  textarea {
    width: 100%;
    min-height: 6rem;
    resize: vertical;
    padding: 0.5rem 0 0 0.5rem;
  }

  #submit {
    width: 100%;
    padding: 0.8rem;
    cursor: pointer;
  }
`;

export const ListContainer = styled.div`
  /* background: red; */
  padding: 20px;
  margin: auto;

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;

    ul li hr {
      width: 100%;
    }

    li {
      list-style-type: none;
    }
  }
  .check-out {
    li {
      padding: 10px;
    }
    hr {
      opacity: 0.5;
    }
  }
`;
