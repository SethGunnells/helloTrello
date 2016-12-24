import { Map } from 'immutable';

import { types } from '../../actions';

export default function cards(state = Map(), action) {
  switch (action.type) {

    case types.RECEIVE_LISTS:
      let newState = action.entities.get('cards');
      return state.merge(newState);

    case types.CREATE_NEW_CARD_SUCCESS:
    case types.SAVE_CARD_SUCCESS:
      return state.set(action.card.id, action.card);

    default:
      return state;

  }
}
