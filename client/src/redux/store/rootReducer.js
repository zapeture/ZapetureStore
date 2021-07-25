import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from '../products/productsReducers';
import partnersReducer from '../../redux/partners/partnersReducers';
import itemReducer from '../../redux/item/itemReducers';
import { cartReducer } from '../../redux/cart/cartReducer';
import {
  userRegisterReducer,
  userLoginReducer,
  userDeleteReducer,
  userUpdateReducer,
  userListReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from '../user/userReducers';

import {
  orderCreateReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer,
} from '../orders/orderReducers';

import { orderDetailsReducer } from '../orders/orderReducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  partnersList: partnersReducer,
  singleItem: itemReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderDetails: orderDetailsReducer,
  userList: userListReducer,
  orderList: orderListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

export default rootReducer;
