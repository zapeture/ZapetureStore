import React from 'react';
import { Button, Column2, Image, RowNormal } from '../../../../utilityStyles';
import { OfferContainer } from '../homeStyles';

const Offer = ({ products }) => {
  return (
    <>
      {products &&
        products.map(
          (product) =>
            product.display_in === 'offer' && (
              <OfferContainer key={product._id}>
                <RowNormal>
                  <Column2 className='hover'>
                    <Image xlarge className='offer-img' src={product.image} />
                  </Column2>
                  <Column2>
                    <p>{product.message}</p>
                    <h1>{product.name}</h1>
                    <small>{product.description}</small>
                    <br />
                    <Button light='light' to={`/products/${product._id}`}>
                      Buy Now
                    </Button>
                  </Column2>
                </RowNormal>
              </OfferContainer>
            )
        )}
    </>
  );
};

export default Offer;
