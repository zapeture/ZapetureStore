import React, { useEffect } from 'react';
import { Button, ListContainer } from '../../../utilityStyles';
import { useDispatch, useSelector } from 'react-redux';
import { listMyOrders } from '../../../redux/orders/orderActions';
import { BounceLoader } from 'react-spinners';
const ProfileOrders = () => {
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading, error, orders } = orderListMy;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <BounceLoader />
      ) : error ? (
        <h1>Cant get orders right now</h1>
      ) : orders ? (
        <ListContainer>
          <div className='card'>
            <h3>Orders</h3>
            <>
              <hr />
              {orders.map((order) => (
                <ul key={order._id}>
                  <li> ORDER ID: {order._id}</li>
                  <li>{order.createdAt.substring(0, 10)}</li>
                  <li>{order.totalPrice}</li>
                  <li>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </li>
                  <li>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </li>
                  <li>
                    <Button dark='dark' to={`/order/${order._id}`}>
                      Details
                    </Button>
                  </li>
                </ul>
              ))}
            </>
          </div>
        </ListContainer>
      ) : (
        <h1>There are no orders</h1>
      )}
    </>
  );
};

export default ProfileOrders;
