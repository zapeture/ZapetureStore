import * as RiIcons from 'react-icons/ri';
import User from '../Layout/Navigations/user/User';
import { logout } from '../../redux/user/userActions';
import { useDispatch, useSelector } from 'react-redux';
import useToggle from './useToggle';

const useSidebarData = () => {
  const [sidebar, showSidebar] = useToggle();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
    console.log('Logged out');
  };

  const sidebarData = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Products',
      path: '/products',
    },
    userLogin.userInfo === null || userLogin.userInfo === undefined
      ? {
          title: (
            <>
              <i className='fas fa-user' /> {'  '}
              <span>Account</span>
            </>
          ),
          path: '#',
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
        }
      : userLogin.userInfo !== null &&
        userLogin.userInfo.isAdmin !== undefined &&
        userLogin.userInfo.name !== undefined &&
        userLogin.userInfo.isAdmin === true
      ? {
          title: <User />,
          path: '#',
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,

          subNav: [
            {
              title: 'Profile',
              path: '/profile',
            },
            {
              title: 'Orders List',
              path: '/admin/orderlist',
            },
            {
              title: 'Products List',
              path: '/admin/productlist',
            },
            {
              title: 'Users List',
              path: '/admin/userlist',
            },
          ],
        }
      : userLogin.userInfo !== null &&
        userLogin.userInfo !== undefined &&
        userLogin.userInfo.isAdmin === false && {
          title: <User />,
          path: '#',
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,

          subNav: [
            {
              title: 'Profile',
              path: '/profile',
            },
          ],
        },
    userLogin.userInfo !== null && userLogin.userInfo.name !== null
      ? {
          title: 'Logout',
          path: '/login',
          onClick: logoutHandler,
        }
      : {
          title: 'Login',
          path: '/login',
        },
  ];

  return [sidebarData];
};

export default useSidebarData;
