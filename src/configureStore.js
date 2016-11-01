import { createStore } from 'redux';
import { rootReducer } from './reducers/root.js';

export const configureStore = () => {
  return createStore(rootReducer);
}
