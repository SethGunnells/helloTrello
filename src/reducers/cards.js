import { RECEIVE_LISTS, CREATE_NEW_CARD } from '../actions';

export default function cards(state = {}, action) {
  switch (action.type) {
    case RECEIVE_LISTS:
      return {
        ...state,
        ...action.response.entities.cards
      };
    case CREATE_NEW_CARD:
      return {
        ...state,
        [action.card.id]: action.card
      };
    default:
      return state;
  }
}
