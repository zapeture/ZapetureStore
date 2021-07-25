import axios from 'axios';

import {
  ITEM_FETCH_REQUEST,
  ITEM_FETCH_SUCCESS,
  ITEM_FETCH_FAILURE,
} from './itemTypes';

export const itemFetchRequest = () => {
  return {
    type: ITEM_FETCH_REQUEST,
  };
};

export const itemFetchSuccess = (data) => {
  return {
    type: ITEM_FETCH_SUCCESS,
    payload: data,
  };
};
export const itemFetchFailure = (error) => {
  return {
    type: ITEM_FETCH_FAILURE,
    payload: error,
  };
};

// async action Fetch Items
const fetchItem = (id) => {
  return (dispatch) => {
    dispatch(itemFetchRequest());
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        const item = response.data;
        dispatch(itemFetchSuccess(item));
        // console.log(item);
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(itemFetchFailure(errMsg));
        // console.log(errMsg);
      });
  };
};

export default fetchItem;
