import styled from 'styled-components';

export const CartContainer = styled.div`
  .cart-page {
    margin: 80px auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }

  .cart-info {
    display: flex;
    flex-wrap: wrap;
  }

  th {
    text-align: left;
    padding: 5px;
    color: #fff;
    background: #000;
    font-weight: normal;
  }
  td {
    padding: 10px 5px;
  }

  td input {
    width: 40px;
    height: 30px;
    padding: 5px;
  }

  td a {
    color: #000;
    font-size: 12px;
  }
  td .remove {
    color: #ff0000;
    font-size: 12px;
  }

  td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  .total-price {
    display: flex;
    justify-content: flex-end;
    table {
      border-top: 3px solid #000;
      width: 100%;
      max-width: 400px;
    }

    td .buy,
    td .back {
      text-align: center;
      margin: 5px;
      display: inline-block;
    }

    td .buy {
      background: #000;
      color: #fff;
    }

    td:last-child {
      text-align: right;
    }
    th:last-child {
      text-align: right;
    }
  }

  @media only screen and (max-width: 600px) {
    .cart-info p {
      display: none;
    }
  } ;
`;

export const ChangeQty = styled.button`
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  margin: 10px;
  background: #fff;
  width: 30px;
  height: 40px;
  color: #000;
  border: none;
  transition: background 0.4s ease-in-out;

  &:hover {
    color: #fff;
    background: #000;
  }

  @media only screen and (max-width: 600px) {
    display: block;
  } ;
`;

export const EmptyCart = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
