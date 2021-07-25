import styled from 'styled-components';

export const OrderItems = styled.li`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  margin: 5px;
  .photo {
    padding: 5px;
    margin: 0;
  }
  .product {
    margin: 2px;
  }
  .product:hover {
    margin: 2px;
    color: #ff0000;
  }
  .price {
    margin: 2px;

    span {
      color: #333;
      padding: 5px;
    }
  }
`;
