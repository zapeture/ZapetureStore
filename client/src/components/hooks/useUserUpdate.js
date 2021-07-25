import React from 'react';
import { useSelector } from 'react-redux';
const useUserUpdate = () => {
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  return [loadingUpdate, errorUpdate, successUpdate];
};

export default useUserUpdate;
