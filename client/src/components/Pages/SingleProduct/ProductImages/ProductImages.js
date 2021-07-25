import React from 'react';
import { Column2, Image } from '../../../../utilityStyles';

const ProductImages = ({ product }) => {
  return (
    <>
      <Column2>
        <Image xlarge src={product.image} className='single-product-image' />
        <div className='small-img-row'>
          {product.sideImage && (
            <div className='small-img-col'>
              <Image xlarge src={product.image} style={{ width: '100%' }} />
            </div>
          )}
        </div>
      </Column2>
    </>
  );
};

export default ProductImages;
