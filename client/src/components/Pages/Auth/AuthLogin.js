import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/user/userActions';
import {
  ButtonRegular,
  Column2,
  ContainerNormal,
  FormContainer,
  Image,
  RowNormal,
} from '../../../utilityStyles';
import showcaseImage from '../../../images/hero-1.jpg';
import Loader from '../../Utilities/Loader';
import ErrorPage from '../../Utilities/ErrorPage';
import useNotify from '../../hooks/useNotify';
import { Link } from 'react-router-dom';
const AuthLogin = ({ location, history }) => {
  const [notify] = useNotify();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  if (error) {
    notify(error, 3000);
  }

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {error && <ErrorPage error={error} />}
      {loading && <Loader small />}
      <ContainerNormal>
        <RowNormal>
          <Column2>
            <Image large src={showcaseImage} />
          </Column2>
          <Column2>
            <FormContainer>
              <div className='container'>
                <header>
                  <h1 id='title'>Login</h1>
                </header>
                <form id='survey-form' onSubmit={submitHandler}>
                  <div className='form-input'>
                    <label id='email-label'>Email</label>
                    <input
                      type='email'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='form-input-size'
                    />
                  </div>
                  <div className='form-input'>
                    <label id='email-label'>Password</label>
                    <input
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='form-input-size'
                    />
                  </div>
                  <br />
                  <ButtonRegular light type='submit' id='submit'>
                    Login
                  </ButtonRegular>
                  <br />
                  <br />
                  <Link
                    to='/register'
                    style={{
                      marginTop: '5px',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}>
                    <small>Register Instead</small>
                  </Link>
                </form>
              </div>
            </FormContainer>
          </Column2>
        </RowNormal>
      </ContainerNormal>
    </>
  );
};

export default AuthLogin;
