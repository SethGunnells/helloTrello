import * as React from 'react';
import {List} from './List.jsx';
import '../styles/index.css';

const cardData = [
  {id: 1, text: 'hello'},
  {id: 2, text: 'world'},
  {id: 3, text: 'i am a card'}
];

export class HelloTrelloApp extends React.Component {
  render() {
    return <List cards={cardData} />;
  }
}
