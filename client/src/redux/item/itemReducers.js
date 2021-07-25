import {
  ITEM_FETCH_REQUEST,
  ITEM_FETCH_SUCCESS,
  ITEM_FETCH_FAILURE,
} from './itemTypes';
const initialState = {
  item: { reviews: [] },
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_FETCH_REQUEST:
      return { ...state, loading: true, item: { reviews: [] } };
    case ITEM_FETCH_SUCCESS:
      return { loading: false, item: action.payload };
    case ITEM_FETCH_FAILURE:
      return { loading: false, error: action.payload, item: { reviews: [] } };
    default:
      return state;
  }
};

export default itemReducer;
