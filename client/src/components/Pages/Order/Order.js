import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ErrorPage from '../../Utilities/ErrorPage';
import {
  Button,
  Column2,
  ContainerNormal,
  Image,
  ListContainer,
  RowNormal,
} from '../../../utilityStyles';
import { BounceLoader } from 'react-spinners';
import Loader from '../../Utilities/Loader';
import { Link } from 'react-router-dom';
import { OrderItems } from '../PlaceOrder/placeorderStyles';
import {
  deliverOrder,
  getOrderDetails,
  payOrder,
} from '../../../redux/orders/orderActions';
import axios from 'axios';
import useNotify from '../../hooks/useNotify';
import { PayPalButton } from 'react-paypal-button-v2';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../../../redux/orders/orderTypes';
const Order = ({ match, history }) => {
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const [sdkReady, setSdkReady] = useState(false);
  const orderId = match.params.id;
  const [notify] = useNotify();
  const dispatch = useDispatch();

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || successDeliver || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, successDeliver, order]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
    notify('Order Payment Successful', 4000);
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        order && (
          <ContainerNormal>
            <RowNormal>
              <Column2>
                <ListContainer>
                  <div className='card'>
                    <ul style={{ textAlign: 'left' }}>
                      <li>
                        <h4>CUSTOMER DETAILS</h4>
                        <p>
                          <strong>Name: </strong>
                          {order.user.name}
                        </p>
                        <p>
                          <strong>Email: </strong>
                          <a href={`mailto:${order.user.email}`}>
                            {order.user.email}
                          </a>
                        </p>
                      </li>
                      <li>
                        <h4>SHIPPING ADDRESS</h4>
                        <p>
                          {order.shippingAddress.address},{' '}
                          {order.shippingAddress.city}
                          {order.shippingAddress.postalCode},
                          {order.shippingAddress.country}
                        </p>
                      </li>
                      <li>
                        {order.isPaid ? (
                          <h4 style={{ color: 'green' }}>Paid</h4>
                        ) : (
                          <h4 style={{ color: 'red' }}>Un Paid</h4>
                        )}
                      </li>
                      <li>
                        <h4>ORDER STATUS</h4>
                        {order.isDelivered ? (
                          <h4 style={{ color: 'green' }}>Delivered</h4>
                        ) : (
                          <h4 style={{ color: 'red' }}>Not delivered</h4>
                        )}
                      </li>
                      <li>
                        <h4>PAYMENT METHOD</h4>
                        <strong>Method: </strong>
                        {order.paymentMethod ? (
                          order.paymentMethod
                        ) : (
                          <span>none</span>
                        )}
                      </li>
                      {order.orderItems && <h4>ORDER ITEMS</h4>}
                      {order.orderItems.map((item, index) => (
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
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                            }}>
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
              </Column2>
              <Column2>
                <>
                  <ListContainer>
                    <div className='card check-out'>
                      <li>ITEMS: ${order.itemsPrice}</li>
                      <hr />
                      <li>SHIPPING: ${order.shippingPrice}</li>
                      <hr />
                      <li>TAX: ${order.taxPrice}</li>
                      <hr />
                      <li>TOTAL: ${order.totalPrice}</li>
                      <hr />
                      <li></li>

                      {!order.isPaid && (
                        <li>
                          {loadingPay && <BounceLoader />}
                          {!sdkReady ? (
                            <BounceLoader />
                          ) : (
                            <PayPalButton
                              amount={order.totalPrice}
                              onSuccess={successPaymentHandler}
                            />
                          )}
                        </li>
                      )}
                    </div>
                  </ListContainer>
                  {loadingDeliver && <BounceLoader />}
                  {userInfo &&
                    userInfo.isAdmin &&
                    order.isPaid &&
                    !order.isDelivered && (
                      <Button to='#' dark='dark' onClick={deliverHandler}>
                        Mark As Delivered
                      </Button>
                    )}
                </>
              </Column2>
            </RowNormal>
          </ContainerNormal>
        )
      )}
    </>
  );
};

export default Order;
