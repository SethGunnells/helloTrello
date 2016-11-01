import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HelloTrelloApp from './HelloTrelloApp.jsx';
import { configureStore } from './configureStore.js';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <HelloTrelloApp />
    </Provider>,
    document.getElementById('app-root')
  );
}

render();
store.subscribe(render);
