import React from 'react';
import ProductCard from '../../../Utilities/ProductCard';
import { Column4 } from '../../../../utilityStyles';

const AllProducts = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Column4 key={product._id}>
          <ProductCard
            dir={`/products/${product._id}`}
            src={product.image}
            name={product.name}
            price={product.price}
            value={product.rating}
            text={product.numReviews}
          />
        </Column4>
      ))}
    </>
  );
};

export default AllProducts;
