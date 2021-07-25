import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './sidebar/SubMenu';
import { IconContext } from 'react-icons/lib';
import { Nav, NavIcon, SidebarNav, SidebarWrap } from './navStyles';
import Logo from './logo/Logo';
import Cart from './cart/Cart';
import User from './user/User';
import { useSelector } from 'react-redux';
import useSidebarData from '../../hooks/useSidebarData';
import Loader from '../../Utilities/Loader';
import ErrorPage from '../../Utilities/ErrorPage';
import useToggle from '../../hooks/useToggle';
import { logout } from '../../../redux/user/userActions';

const Navigation = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const qty = cartItems.reduce((acc, product) => acc + product.qty, 0);
  const [sidebarData] = useSidebarData();
  const [sidebar, showSidebar] = useToggle();

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        sidebarData &&
        !undefined &&
        !null && (
          <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
              <NavIcon to='#'>
                <FaIcons.FaBars onClick={showSidebar} />
              </NavIcon>
              <Logo to={'/'} />
              <User />
              <Cart qty={qty} />
            </Nav>
            <SidebarNav sidebar={sidebar}>
              <SidebarWrap>
                <NavIcon to='#'>
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
                {sidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
        )
      )}
    </>
  );
};

export default Navigation;
