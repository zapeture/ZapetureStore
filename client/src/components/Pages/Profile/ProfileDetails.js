import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getUserDetails,
  updateUserProfile,
} from '../../../redux/user/userActions';
import { ButtonRegular, FormContainer } from '../../../utilityStyles';
import { BounceLoader } from 'react-spinners';
import { USER_UPDATE_PROFILE_RESET } from '../../../redux/user/userTypes';

const ProfileDetails = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== conpassword) {
      console.log('Password dont match');
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <>
      {loading ? (
        <BounceLoader loading />
      ) : error ? (
        <h1>Cant get Details right now</h1>
      ) : user ? (
        <FormContainer>
          <div className='container'>
            <header>
              <h1 id='title'>{user.name || 'User'}'s Details</h1>
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
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-input-size'
                />
              </div>
              <div className='form-input'>
                <label id='password-label'>Confirm Password</label>
                <input
                  type='password'
                  placeholder='Confirm password'
                  value={conpassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  className='form-input-size'
                />
              </div>
              <br />
              <ButtonRegular light type='submit' id='submit'>
                Update
              </ButtonRegular>
            </form>
          </div>
        </FormContainer>
      ) : (
        <h1>User does not exist</h1>
      )}
    </>
  );
};

export default ProfileDetails;
