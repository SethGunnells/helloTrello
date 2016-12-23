// Aggregrate file for reducers. Contains the root reducer.
import { combineReducers } from 'redux-immutable';

import entities from './entities';
import selectors from '../selectors'
import ui from './ui';

// The root reducer, the overall logical driver for the app.
// Currently does not need to be broken down into more reducers,
// but probably will be in the future.
export const rootReducer = combineReducers({
  entities,
  ui
});
