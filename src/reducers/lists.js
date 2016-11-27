import { Map, List } from 'immutable';

import { types } from '../actions';
import { CardList } from '../models';

export default function lists(state = Map(), action) {
  switch (action.type) {
    case types.RECEIVE_LISTS:
      return action.entities.get('lists');
    case types.CREATE_NEW_CARD:
      let list = state.get(action.card.listId);
      list = list.set('cards', list.cards.push(action.card.id));
      return state.set(list.id, list);
    default:
      return state;
  }
}

/**
 * SELECTORS
 */
export function getAllLists(state) {
  if (state === undefined) return List();
  return state.toList();
}
