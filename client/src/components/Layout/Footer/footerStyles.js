import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin-top: 70px;
  background: #000;
  color: #fff;
  font-size: 14px;
  padding: 60px 0 20px;

  p {
    color: #8a8a8a;
  }
  .icons {
    font-size: 40px;
    margin: 10px;
  }
  h3 {
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
  }
  .col-1 {
    flex-basis: 30%;
  }
  .col-2 {
    flex: 1;
    text-align: center;
  }

  .col-3,
  .col-4 {
    flex-basis: 12%;
    text-align: center;
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4 {
    min-width: 250px;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    text-align: center;
    margin: auto;
  }

  hr {
    border: none;
    background: #b5b5b5;
    height: 1px;
    margin: 20px 0;
  }

  .copyright {
    text-align: center;
  }

  .col-1 {
    min-width: 250px;
    @media only screen and (max-width: 600px) {
    }
  }
`;
