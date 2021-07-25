import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const SidebarNav = styled.nav`
  background: #000;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #fff;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;

export const LogoStyle = styled(Link)`
  padding: 1rem 0;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  margin: auto;
  span {
    font-weight: 300;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    span {
      font-size: 1rem;
    }
  }
`;

export const CartStyle = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  font-size: 1.5rem;
  margin: 5px 20px;
  cursor: pointer;

  & span {
    vertical-align: top;
    font-family: 'Poppins', sans-serif;
    background: #fff;
    color: #000;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    font-size: 0.5rem;
    height: 4px;
    width: 4px;
    margin: 5px;
    padding: 0.1px 2.5px;
    z-index: 2;
    top: 0;
    left: 0;
  }

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    & span {
      font-size: 0.45rem;
      padding: 0.1px 3px;
      margin: 4px 2px;
    }
  }
`;

export const UserStyles = styled.i`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  font-size: 1.5rem;
  font-size: ${({ sideNav }) => (sideNav ? '1.5rem' : '1rem')};
  margin: 5px 20px;
  cursor: pointer;
  span {
    margin: 5px;
    font-size: 1rem;
  }
  sup {
    margin: 2px;
    font-size: 0.5rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin: 5px 5px;
    span {
      font-size: 0.6rem;
    }
  }
`;
