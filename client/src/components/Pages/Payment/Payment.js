import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePaymentMethod } from '../../../redux/cart/cartActions';
import {
  ButtonRegular,
  ContainerSmall,
  FormContainer,
} from '../../../utilityStyles';
const Payment = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    history.push('/shipping');
  }
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };
  const nothing = () => {};

  return (
    <ContainerSmall>
      <FormContainer>
        <div className='container'>
          <header>
            <h1 id='title'>Payment Method</h1>
          </header>
          <form id='survey-form' onSubmit={submitHandler}>
            <div className='form-input'>
              <label>
                <input
                  type='checkbox'
                  checked={paymentMethod}
                  id='check-box'
                  onChange={(e) => setPaymentMethod(e.target.checked)}
                />
                Paypal
              </label>
            </div>
            <div className='form-input'>
              <label>
                <input
                  type='checkbox'
                  id='check-box'
                  onChange={nothing}
                  disabled
                />
                Debit or Credit Card{' '}
                <span
                  style={{ fontSize: '10px', margin: '5px', opacity: '0.5' }}>
                  Coming Soon
                </span>
              </label>
            </div>
            <br />
            <ButtonRegular light='light' type='submit' id='submit'>
              Continue
            </ButtonRegular>
          </form>
        </div>
      </FormContainer>
    </ContainerSmall>
  );
};

export default Payment;
