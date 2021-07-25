import React from 'react';
import { ContainerNormal, RowNormal } from '../../../utilityStyles';
import NavLogo from '../Navigations/logo/Logo';
import { FooterContainer } from './footerStyles';

const FooterMain = () => {
  return (
    <FooterContainer>
      <ContainerNormal>
        <RowNormal>
          <div className='col-1'>
            <i className='fab fa-google-play icons' />
            <i className='fab fa-app-store-ios icons' />
            <h3>Download our App</h3>
            <p>Download App for Android and IOS</p>
          </div>
          <div className='col-2'>
            <NavLogo to={'/'} />
            <p>
              Our brand stands for utmost value with no compromise in quality
            </p>
          </div>
          <div className='col-3'>
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className='col-4'>
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Insagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </RowNormal>
      </ContainerNormal>
      <hr />
      <p className='copyright'>
        Copyright {new Date().getUTCFullYear()} Zapeture Creations
      </p>
    </FooterContainer>
  );
};

export default FooterMain;
