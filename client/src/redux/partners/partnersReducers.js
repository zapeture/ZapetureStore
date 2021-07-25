import {
  PARTNER_FETCH_REQUEST,
  PARTNER_FETCH_SUCCESS,
  PARTNER_FETCH_FAILURE,
} from './partnersTypes';
const initialState = {
  partners: [],
  error: null,
  loading: false,
};

const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARTNER_FETCH_REQUEST:
      return { ...state, partners: [], error: null, loading: true };
    case PARTNER_FETCH_SUCCESS:
      return {
        ...state,
        partners: action.payload,
        error: null,
        loading: false,
      };
    case PARTNER_FETCH_FAILURE:
      return { ...state, partners: [], error: action.payload, loading: false };

    default:
      return state;
  }
};

export default partnersReducer;
