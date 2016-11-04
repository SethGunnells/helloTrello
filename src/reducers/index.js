import { FETCH_LISTS, RECEIVE_LISTS } from '../actions';

export const rootReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.response.entities;
    default:
      return state;
  }
}

/**
 * SELECTORS
 */
export const getAllLists = (state) => {
  if (!state.lists) return [];

  // Get all the lists and make shallow copies
  var listIds = Object.keys(state.lists);
  var lists = listIds.map(id => Object.assign({}, state.lists[id]));

  // Fill in the cards property with the proper objects
  var selectedLists = lists.map(list => {
    list.cards = list.cards.map(cardId => state.cards[cardId]);
    return list;
  });

  return selectedLists;
};
