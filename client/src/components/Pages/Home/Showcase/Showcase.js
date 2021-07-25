import React from 'react';
import { Image } from '../../../../utilityStyles';
import { GalleryContainer } from '../homeStyles';
const Showcase = ({ products }) => {
  return (
    products && (
      <GalleryContainer>
        <h1>Categories</h1>
        <div className='container'>
          {products.map(
            (product) =>
              product.display_in === 'category' && (
                <div className={`gallery-container w-1 h-2`} key={product._id}>
                  <div className='gallery-item'>
                    <div className='image'>
                      <Image src={product.image} alt='people' />
                    </div>
                    <div className='text'>{product.category}</div>
                  </div>
                </div>
              )
          )}
        </div>
      </GalleryContainer>
    )
  );
};

export default Showcase;
