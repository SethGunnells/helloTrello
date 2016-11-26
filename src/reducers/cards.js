import { Map } from 'immutable';

import { Card } from '../models';
import { RECEIVE_LISTS, CREATE_NEW_CARD, EDIT_CARD } from '../actions';

export default function cards(state = Map(), action) {
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.entities.get('cards');
    case CREATE_NEW_CARD:
      return state.set(action.card.id, action.card);
    case EDIT_CARD:
      return state.update(action.id, card => card.set('title', action.titleText));
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
