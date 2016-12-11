import { Map, List } from 'immutable';

import { types } from '../../actions';

export default function lists(state = Map(), action) {
  switch (action.type) {

    case types.RECEIVE_LISTS:
      return action.entities.get('lists');

    case types.CREATE_NEW_CARD:
      return state.updateIn(
          [action.card.listId, 'cards'],
          cards => cards.push(action.card)
      );

    default:
      return state;

  }
}
