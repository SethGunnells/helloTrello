import { normalize, Schema, arrayOf } from 'normalizr';
import { fromJS, Map } from 'immutable';

import { Card, CardList } from '../models';

// Constants
const FETCH_URL = '/lists?_embed=cards';

// Action types
export const FETCH_LISTS = 'FETCH_LISTS';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';

export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';

// Normalizr schemas
const ListSchema = new Schema('lists');
const CardSchema = new Schema('cards');

ListSchema.define({
  cards: arrayOf(CardSchema)
});

/**
 * Relies on Redux thunk middleware
 */
export const fetchLists = () => (dispatch) => {
  dispatch({
    type: FETCH_LISTS
  });

  return fetch(FETCH_URL).then(response => response.json())
    .then((response) => {
      var data = fromJS(normalize(response, arrayOf(ListSchema)).entities);

      var lists = data.get('lists').reduce(
        (_lists, list, key) => _lists.set(parseInt(key), new CardList(list)),
        Map()
      );
      var cards = data.get('cards').reduce(
        (_cards, card, key) => _cards.set(parseInt(key), new Card(card)),
        Map()
      );

      data = data.set('lists', lists).set('cards', cards);

      dispatch({
        type: RECEIVE_LISTS,
        entities: data
      });
    });
};

export const createNewCard = newCardData => {
  return {
    type: CREATE_NEW_CARD,
    card: new Card(newCardData)
  };
};
