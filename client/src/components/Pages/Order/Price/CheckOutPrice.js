import React, { useEffect, useState } from 'react';
import { Button, ListContainer } from '../../../../utilityStyles';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { PayPalButton } from 'react-paypal-button-v2';
import {
  deliverOrder,
  getOrderDetails,
  payOrder,
} from '../../../../redux/orders/orderActions';
import { BounceLoader } from 'react-spinners';
// import {
//   ORDER_DELIVER_RESET,
//   ORDER_PAY_RESET,
// } from '../../../../redux/orders/orderTypes';
import useNotify from '../../../hooks/useNotify';
const CheckOutPrice = ({ order, match, history }) => {
  return <h1></h1>;
};

export default CheckOutPrice;
