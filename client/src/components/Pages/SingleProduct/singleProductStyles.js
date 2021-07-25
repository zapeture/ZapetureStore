import styled from 'styled-components';

export const SingleProductContainer = styled.div`
  .single-product {
    margin-top: 80px;
  }

  .single-product-image {
    width: 90%;
    margin: 20px auto;
    display: block;
  }

  .product-details {
    text-align: left;
  }
  .single-product h4 {
    margin: 20px;
    font-size: 22px;
    font-weight: bold;
  }

  .single-product select {
    display: block;
    padding: 10px;
    margin: 20px 0 20px 0;
  }

  .single-product input {
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin: 20px 0 20px 0;
    border: 1px solid #000;
  }

  input:focus {
    outline: none;
  }

  .single-product .fa {
    color: #ff523b;
  }

  .small-img-row {
    display: flex;
    justify-content: space-evenly;
  }
  .small-img-col {
    flex-basis: 24%;
    cursor: pointer;
  }
`;

export const ReviewsContainer = styled.div`
  padding-top: 50px;

  .tesimonials {
    text-align: center;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
  }
  .tesimonials:hover {
    transform: translateY(-10px);
  }
`;
