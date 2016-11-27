import { Map } from 'immutable';

import { Card } from '../models';
import { types } from '../actions';

export default function cards(state = Map(), action) {
  switch (action.type) {
    case types.RECEIVE_LISTS:
      return action.entities.get('cards');
    case types.CREATE_NEW_CARD:
      return state.set(action.card.id, action.card);
    default:
      return state;
  }
}

/**
 * SELECTORS
 */
export function getCardsByListId(state, listId) {
  return state
    .filter(card => card.listId === listId)
    .toList();
}

export function getCardById(state, id) {
  return state.get(id);
}
