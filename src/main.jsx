import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HelloTrelloApp from './HelloTrelloApp.jsx';

const cardData = [
  {id: 1, title: 'This has changed!'},
  {id: 2, title: 'world'},
  {id: 3, title: 'i am a card'}
];
const reducer = (state=cardData, action) => {
  return state;
}

const store = createStore(reducer);

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
