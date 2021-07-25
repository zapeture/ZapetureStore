import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../utilityStyles';
import Rating from './Rating';

const ProductCard = ({ dir, src, name, price, value, text, color }) => {
  return (
    <>
      <Link
        to={dir}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <Image xlarge src={src} style={{ padding: '0px', margin: '0px' }} />
        <h4 style={{ color: '#555', fontWeight: 'normal' }}> {name}</h4>
        <Rating value={value} text={text} color={color} spacing={'5px'} />
        <p style={{ fontSize: '20px' }}>${price}</p>
      </Link>
    </>
  );
};

export default ProductCard;
