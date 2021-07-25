import React, { useState } from 'react';
import { Button, ButtonRegular, Column2 } from '../../../../utilityStyles';
import useNotify from '../../../hooks/useNotify';

const ProductInfo = ({ history, match, product }) => {
  const [qty, setQty] = useState(1);
  const [notify] = useNotify();

  const addToCartHandler = () => {
    notify('Added to Cart', 3000);
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  return (
    <>
      <Column2 className='product-details'>
        <p>{product.category}</p>
        <h1>{product.name}</h1>
        <h4>${product.price}</h4>
        {product.sizes && (
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>L</option>
            <option>M</option>
            <option>S</option>
          </select>
        )}
        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>L</option>
          <option>M</option>
          <option>S</option>
        </select>
        {product.countInStock > 0 && (
          <input
            id='browser'
            type='number'
            onChange={(e) => setQty(e.target.value)}
            value={qty}
            min={0}
            max={product.countInStock}
          />
        )}
        {product.countInStock > 0 ? (
          <Button
            to='#'
            dark='dark'
            onClick={addToCartHandler}
            style={{ display: 'inline', margin: '0 15px' }}>
            Add to cart
          </Button>
        ) : (
          <ButtonRegular dark='dark' to='/' disabled>
            Unavailable
          </ButtonRegular>
        )}
        <br />
        <h3>Product Details</h3>
        <p>{product.description}</p>
      </Column2>
    </>
  );
};

export default ProductInfo;
