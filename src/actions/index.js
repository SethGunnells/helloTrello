import { normalize, Schema, arrayOf } from 'normalizr';
import { fromJS, Map } from 'immutable';

import { Card, CardList } from '../models';
import * as types from './types';

export {types};

// Constants
const FETCH_URL = '/lists?_embed=cards';
const CARDS_URL = '/cards/';

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
    type: types.FETCH_LISTS
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
        type: types.RECEIVE_LISTS,
        entities: data
      });
    });
};

export const createNewCard = (newCard) => (dispatch) => {
  dispatch({
    type: types.CREATE_NEW_CARD,
    card: newCard
  });

  let cardData = newCard.toJS();
  delete cardData.id;

  var opts = {
    method: 'POST',
    body: JSON.stringify(cardData),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(CARDS_URL, opts)
    .then(response => response.json())
    .then(card => {
      dispatch({
        type: types.CREATE_NEW_CARD_SUCCESS,
        card: new Card(card)
      });
    });
};

export const editCard = (cardId) => {
  return {
    type: types.EDIT_CARD,
    cardId
  };
};

export const saveCard = (editedCard) => (dispatch) => {
  dispatch({
    type: types.SAVE_CARD,
    card: editedCard
  });

  var opts = {
    method: 'PUT',
    body: JSON.stringify(editedCard.toJS()),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(CARDS_URL + editedCard.id, opts)
    .then(response => response.json())
    .then(card => {
      dispatch({
        type: types.SAVE_CARD_SUCCESS,
        card: new Card(card)
      });
    });
};

export const cancelCardEdit = () => {
  return {
    type: types.CANCEL_CARD_EDIT
  };
};
