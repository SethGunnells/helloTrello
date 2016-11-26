import { RECEIVE_LISTS, CREATE_NEW_CARD } from '../actions';

export default function lists(state = {}, action) {
  switch (action.type) {
    case RECEIVE_LISTS:
      return {
        ...state,
        ...action.response.entities.lists
      };
    case CREATE_NEW_CARD:
      let list = { ...state[action.card.listId] };
      list.cards = [...list.cards, action.card.id];
      return {
        ...state,
        [list.id]: list
      };
    default:
      return state;
  }
}

/**
 * SELECTORS
 */
export function getAllLists(state) {
  if (state === undefined) return [];
  
  var keys = Object.keys(state);
  return keys.map(id => ({...state[id]}));
}
