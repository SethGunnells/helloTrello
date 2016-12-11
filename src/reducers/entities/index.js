import { combineReducers } from 'redux-immutable';

import cards from './cards';
import lists from './lists'

export default combineReducers({
  cards,
  lists
});
