import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingAddress } from '../../../redux/cart/cartActions';
import {
  ButtonRegular,
  ContainerSmall,
  FormContainer,
} from '../../../utilityStyles';
const Shipping = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress.country || '');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };

  return (
    <ContainerSmall>
      <FormContainer>
        <div className='container'>
          <header>
            <h1 id='title'>Shipping Details</h1>
          </header>
          <form id='survey-form' onSubmit={submitHandler}>
            <div className='form-input'>
              <label id='address-label'>Address</label>
              <input
                type='text'
                required
                placeholder='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='form-input-size'
              />
            </div>
            <div className='form-input'>
              <label id='city-label'>City</label>
              <input
                type='text'
                placeholder='City'
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
                className='form-input-size'
              />
            </div>
            <div className='form-input'>
              <label id='postalCode-label'>Postal Code</label>
              <input
                type='text'
                required
                placeholder='Postal Code'
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className='form-input-size'
              />
            </div>
            <div className='form-input'>
              <label id='country-label'>Country</label>
              <input
                type='text'
                required
                placeholder='Country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className='form-input-size'
              />
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

export default Shipping;
