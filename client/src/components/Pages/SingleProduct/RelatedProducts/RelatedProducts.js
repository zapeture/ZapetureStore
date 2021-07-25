import React from 'react';
import { Column4 } from '../../../../utilityStyles';
import ProductCard from '../../../Utilities/ProductCard';
const RelatedProducts = ({ relatedProducts, compare, id }) => {
  return (
    <>
      <br />
      {relatedProducts.map(
        (product) =>
          product.category === compare.category &&
          product._id !== id && (
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
          )
      )}
    </>
  );
};

export default RelatedProducts;
