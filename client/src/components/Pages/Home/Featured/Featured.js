import React from 'react';
import { Column4, RowNormal } from '../../../../utilityStyles';
import ProductCard from '../../../Utilities/ProductCard';
import { FeaturedProductsContainer } from '../homeStyles';

const Featured = ({ products }) => {
  return (
    <>
      <FeaturedProductsContainer>
        <h1>Featured Products </h1>
        <RowNormal>
          {products.map(
            (product) =>
              product.display_in === 'featured' && (
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
        </RowNormal>
      </FeaturedProductsContainer>
    </>
  );
};

export default Featured;
