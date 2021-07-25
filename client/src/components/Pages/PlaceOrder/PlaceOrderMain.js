import React from 'react';
import { Column2, ContainerNormal, RowNormal } from '../../../utilityStyles';
import OrderDetails from './Details/OrderDetails';
import OrderPrice from './Details/OrderPrice';
import { useSelector } from 'react-redux';
const PlaceOrderMain = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <ContainerNormal>
      <RowNormal>
        <Column2>
          <OrderDetails history={history} cart={cart} />
        </Column2>
        <Column2>
          <OrderPrice history={history} cart={cart} />
        </Column2>
      </RowNormal>
    </ContainerNormal>
  );
};

export default PlaceOrderMain;
