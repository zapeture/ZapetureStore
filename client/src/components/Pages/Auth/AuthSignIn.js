import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/user/userActions';
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
const AuthSingnIn = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const [notify] = useNotify();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      notify('Passwords do not match', 4000);
    } else {
      notify('Register successful', 3000);
      dispatch(register(name, email, password));
    }
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
                  <h1 id='title'>Register</h1>
                </header>
                <form id='survey-form' onSubmit={submitHandler}>
                  <div className='form-input'>
                    <label id='name-label'>Name</label>
                    <input
                      type='text'
                      placeholder='Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='form-input-size'
                    />
                  </div>
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
                    <label id='password-label'>Password</label>
                    <input
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='form-input-size'
                    />
                  </div>
                  <div className='form-input'>
                    <label id='confirm-password-label'>Confirm Password</label>
                    <input
                      type='password'
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className='form-input-size'
                    />
                  </div>
                  <br />
                  <ButtonRegular light type='submit' id='submit'>
                    Register
                  </ButtonRegular>
                  <br />
                  <br />
                  <Link
                    to='/login'
                    style={{
                      marginTop: '5px',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}>
                    <small>Login Instead</small>
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

export default AuthSingnIn;
