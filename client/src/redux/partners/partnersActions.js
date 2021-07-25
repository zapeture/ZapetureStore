import axios from 'axios';

import {
  PARTNER_FETCH_REQUEST,
  PARTNER_FETCH_SUCCESS,
  PARTNER_FETCH_FAILURE,
} from './partnersTypes';

export const partnersFetchRequest = () => {
  return {
    type: PARTNER_FETCH_REQUEST,
  };
};

export const partnersFetchSuccess = (partners) => {
  return {
    type: PARTNER_FETCH_SUCCESS,
    payload: partners,
  };
};
export const partnersFetchFailure = (error) => {
  return {
    type: PARTNER_FETCH_FAILURE,
    payload: error,
  };
};

// async action Fetch Partners
export const fetchPartners = () => {
  return (dispatch) => {
    dispatch(partnersFetchRequest());
    axios
      .get('/api/partners')
      .then((response) => {
        const partners = response.data;
        dispatch(partnersFetchSuccess(partners));
        // console.log(partners);
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(partnersFetchFailure(errMsg));
        // console.log(errMsg);
      });
  };
};

export default fetchPartners;
