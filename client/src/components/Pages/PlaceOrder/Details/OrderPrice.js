import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListContainer } from '../../../../utilityStyles';
import { createOrder } from '../../../../redux/orders/orderActions';
import useNotify from '../../../hooks/useNotify';
import { USER_DETAILS_RESET } from '../../../../redux/user/userTypes';
import { ORDER_CREATE_RESET } from '../../../../redux/orders/orderTypes';
const OrderPrice = ({ cart, history }) => {
  const [notify] = useNotify();
  const dispatch = useDispatch();

  if (!cart.shippingAddress.address) {
    history.push('/shipping');
  } else if (!cart.paymentMethod) {
    history.push('/payment');
  }

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);

  const { order, success, error } = orderCreate;

  if (error) {
    notify(error, 3000);
  }

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
      notify('Order Created', 3000);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: (cart.paymentMethod = 'paypal'),
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <ListContainer>
        <div className='card check-out'>
          <li>ITEMS: ${cart.itemsPrice}</li>
          <hr />
          <li>SHIPPING: ${cart.shippingPrice}</li>
          <hr />
          <li>TAX: ${cart.taxPrice}</li>
          <hr />
          <li>TOTAL: ${cart.totalPrice}</li>
          <hr />
          <li>
            <Button
              style={{ display: 'block' }}
              to='#'
              dark='dark'
              className='buy'
              disabled={cart.cartItems === 0}
              onClick={placeOrderHandler}>
              Order
            </Button>
          </li>
        </div>
      </ListContainer>
    </>
  );
};

export default OrderPrice;
