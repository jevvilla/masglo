import * as types from './types';
import { BASE_URL } from '../../common/strings';

export const fetchingUsersRequest = () => ({
  type: types.FETCHING_USERS_REQUEST,
});

export const fetchingUsersSuccess = data => ({
  type: types.FETCHING_USERS_SUCCESS,
  payload: data,
});

export const fetchingUsersFailure = err => ({
  type: types.FETCHING_USERS_FAILURE,
  payload: err,
});

export const fetchingUsers = () => {
  return async dispatch => {
    dispatch(fetchingUsersRequest());
    try {
      const response = await fetch(BASE_URL);
      const { results } = await response.json();
      dispatch(fetchingUsersSuccess(results));
    } catch (err) {
      dispatch(fetchingUsersFailure(err));
    }
  };
};
