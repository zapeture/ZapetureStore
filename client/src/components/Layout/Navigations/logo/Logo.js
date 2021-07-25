import React from 'react';
import { LogoStyle as Logo } from '../navStyles';

const NavLogo = ({ to }) => {
  return (
    <Logo to={to}>
      ZAPETURE
      <span>STORE</span>
    </Logo>
  );
};

export default NavLogo;
