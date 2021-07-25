import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPageStyles } from '../../utilityStyles';

const ErrorPage = ({ error }) => {
  return (
    <ErrorPageStyles>
      <div id='notfound'>
        <div className='notfound'>
          <div className='notfound-404'>
            <h1>SORRY</h1>
          </div>
          <h2>{error}</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
            <Link to='/'>Return to homepage</Link>
          </p>
          <div className='notfound-social'>
            <a href='https://www.facebook.com/'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#'>
              <i className='fab fa-github'></i>
            </a>
            <a href='#'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
    </ErrorPageStyles>
  );
};

export default ErrorPage;
