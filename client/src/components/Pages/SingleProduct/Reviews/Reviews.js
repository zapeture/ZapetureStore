import React from 'react';
import {
  Column4,
  ContainerSmall,
  Image,
  RowNormal,
} from '../../../../utilityStyles';
import Rating from '../../../Utilities/Rating';
import { ReviewsContainer } from '../singleProductStyles';
import placeholderImg from '../../../../images/placeholder-img.png';
const Reviews = ({ product }) => {
  return (
    <ReviewsContainer>
      <ContainerSmall>
        <RowNormal>
          {product.reviews.map((review) => (
            <Column4 key={review._id} className='tesimonials'>
              <p>{review.comment}</p>
              <Rating value={review.rating} />
              {/* <Image className='test' xsmall src={placeholderImg} /> */}
              <i
                className='fas fa-user'
                style={{ fontSize: '70px', padding: '10px' }}
              />
              <h3>{review.name}</h3>
              <p>{review.createdAt.substring(0, 10)}</p>
            </Column4>
          ))}
        </RowNormal>
      </ContainerSmall>
    </ReviewsContainer>
  );
};

export default Reviews;
