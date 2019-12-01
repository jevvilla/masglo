import * as types from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  error: null,
  users: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCHING_USERS_REQUEST:
      return { ...state, isFetching: true };

    case types.FETCHING_USERS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };

    case types.FETCHING_USERS_SUCCESS:
      return { ...state, isFetching: false, users: action.payload };

    default:
      return state;
  }
};

export default userReducer;
