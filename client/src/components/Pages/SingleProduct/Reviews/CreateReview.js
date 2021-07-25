import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProductReview } from '../../../../redux/products/productsActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../../../../redux/products/productsTypes';
import { ButtonRegular, FormContainer } from '../../../../utilityStyles';
import useNotify from '../../../hooks/useNotify';

const CreateReview = ({ productReviewCreate, match }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [notify] = useNotify();
  const dispatch = useDispatch();
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment('');
      notify('Review Submitted Successfully', 3000);
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, successProductReview]);

  if (errorProductReview) {
    notify(errorProductReview, 3000);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };
  return (
    <>
      <FormContainer>
        <div className='container'>
          <header>
            <h1 id='title'>Review</h1>
          </header>
          <form id='survey-form' onSubmit={submitHandler}>
            <div className='form-input'>
              <p>Rating</p>
              <select
                id='rating'
                className='form-input-size'
                value={rating}
                onChange={(e) => setRating(e.target.value)}>
                <option value=''>Select...</option>
                <option value='1'>1 - Poor</option>
                <option value='2'>2 - Fair</option>
                <option value='3'>3 - Good</option>
                <option value='4'>4 - Very Good</option>
                <option value='5'>5 - Excellent</option>
              </select>
            </div>
            <div className='form-input'>
              <label id='comment-label'>Comment</label>
              <input
                row='3'
                col='3'
                type='textarea'
                placeholder='Comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className='form-input-size'
              />
            </div>
            <br />
            <ButtonRegular light type='submit' id='submit'>
              Submit
            </ButtonRegular>
          </form>
        </div>
      </FormContainer>
    </>
  );
};

export default CreateReview;
