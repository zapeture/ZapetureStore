import React, { useState } from 'react';
import { UserStyles } from '../navStyles';
import { useSelector } from 'react-redux';
const User = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      {userInfo && (
        <UserStyles>
          <i className='fas fa-user' />
          {userInfo.name !== null ? (
            <span style={{ textTransform: 'uppercase' }}>{userInfo.name}</span>
          ) : (
            <span style={{ textTransform: 'uppercase' }}></span>
          )}

          {userInfo.isAdmin && (
            <sup style={{ textTransform: 'uppercase' }}>(Admin)</sup>
          )}
        </UserStyles>
      )}
    </>
  );
};

export default User;
