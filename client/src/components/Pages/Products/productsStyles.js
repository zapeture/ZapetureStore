import styled from 'styled-components';

export const AllProductsContainer = styled.div`
  .row-2 {
    justify-content: space-between;
    margin: 100px auto 50px;
  }

  select {
    border: 1px solid #000;
    padding: 5px;
  }

  select:focus {
    outline: none;
  }

  .page-button {
    margin: 0 auto 80px;
  }
  .page-button span {
    display: inline-block;
    border: 1px solid #000;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }

  .page-button span:hover {
    background: #000;
    color: #fff;
  }
`;
