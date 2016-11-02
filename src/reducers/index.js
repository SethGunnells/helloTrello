import { FETCH_LISTS, RECEIVE_LISTS } from '../actions';

export const rootReducer = (state=[], action) => {
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    default:
      return state;
  }
}
