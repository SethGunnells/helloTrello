import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// Function to bootstrap the store and kickoff the application. Turns the key in
// the virtual engine before rendering begins. Should only be called once at
// startup.
export const configureStore = () => {
  const logger = createLogger();

  return createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
}
