import React from 'react';
import { Column4, RowNormal } from '../../../../utilityStyles';
import ProductCard from '../../../Utilities/ProductCard';
import { LatestProductsContainer } from '../homeStyles';

const Latest = ({ products }) => {
  return (
    <>
      <LatestProductsContainer>
        <h1>Latest Products </h1>
        <RowNormal>
          {products.map(
            (product) =>
              product.display_in === 'latest' && (
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
      </LatestProductsContainer>
    </>
  );
};

export default Latest;
