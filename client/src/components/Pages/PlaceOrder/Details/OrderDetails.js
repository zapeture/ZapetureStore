import React from 'react';
import { Image, ListContainer } from '../../../../utilityStyles';
import { Link } from 'react-router-dom';
import { OrderItems } from '../placeorderStyles';
const OrderDetails = ({ cart }) => {
  return (
    <>
      <ListContainer>
        <div className='card'>
          <ul style={{ textAlign: 'left' }}>
            <li>
              <h4>SHIPPING ADDRESS</h4>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}
                {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
              </p>
            </li>
            <li>
              <h4>PAYMENT METHOD</h4>
              <strong>Method: </strong>
              {cart.paymentMethod ? cart.paymentMethod : <span>none</span>}
            </li>
            {cart.cartItems && <h4>ORDER ITEMS</h4>}
            {cart.cartItems.map((item, index) => (
              <OrderItems key={index}>
                <Image
                  xsmall
                  withBg
                  src={item.image}
                  alt='image'
                  className='photo'
                />
                <Link
                  className='product'
                  to={`/products/${item.product}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.name}
                </Link>

                <h4 className='price'>
                  {item.qty} x ${item.price} =
                  <span>${item.qty * item.price}</span>
                </h4>
              </OrderItems>
            ))}
          </ul>
        </div>
      </ListContainer>
    </>
  );
};

export default OrderDetails;
