import React from 'react';
import { useSelector } from 'react-redux';
const useCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const qty = cartItems.reduce((acc, product) => acc + product.qty, 0);
  return [cartItems, qty];
};

export default useCart;
