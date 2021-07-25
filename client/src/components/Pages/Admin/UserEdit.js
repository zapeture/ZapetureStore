import React, { useState, useEffect } from 'react';
import { ButtonRegular, FormContainer } from '../../../utilityStyles';
import { useDispatch } from 'react-redux';
import useUserDetails from '../../hooks/useUserDetails';
import useUserUpdate from '../../hooks/useUserUpdate';
import { USER_UPDATE_RESET } from '../../../redux/user/userTypes';
import { getUserDetails, updateUser } from '../../../redux/user/userActions';
import Loader from '../../Utilities/Loader';
import ErrorPage from '../../Utilities/ErrorPage';
import useNotify from '../../hooks/useNotify';

const UserEdit = ({ match, history }) => {
  const userId = match.params.id;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const [loading, error, user] = useUserDetails();
  const [loadingUpdate, errorUpdate, successUpdate] = useUserUpdate();
  const [notify] = useNotify();

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push('/admin/userlist');
      if (
        user.name !== name ||
        user.email !== email ||
        user.isAdmin !== isAdmin
      ) {
        notify('Update Successful', 3000);
      }
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        console.log(user.name);
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
    // eslint-disable-next-line
  }, [dispatch, history, userId, user, successUpdate, notify]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  return (
    <>
      {loadingUpdate && <Loader small />}
      {errorUpdate && <ErrorPage error={errorUpdate} />}
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <FormContainer>
          <div className='container'>
            <header>
              <h1 id='title'>Edit User</h1>
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
                <label>
                  <input
                    type='checkbox'
                    checked={isAdmin}
                    id='check-box'
                    onChange={(e) => setIsAdmin(e.target.checked)}
                  />
                  Is Admin
                </label>
              </div>
              <br />
              <ButtonRegular light='light' type='submit' id='submit'>
                Update
              </ButtonRegular>
            </form>
          </div>
        </FormContainer>
      )}
    </>
  );
};

export default UserEdit;
