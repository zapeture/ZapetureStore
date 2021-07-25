import React from 'react';
import { CartStyle as Cart } from '../navStyles';
const NavCart = ({ qty }) => {
  return (
    <Cart to='/cart' className='fas fa-shopping-cart a'>
      {qty ? <span>{qty + 0}</span> : <span>{0}</span>}
    </Cart>
  );
};

export default NavCart;
