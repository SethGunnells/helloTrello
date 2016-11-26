// Aggregrate file for reducers. Contains the root reducer.
import { combineReducers } from 'redux';
import lists from './lists';
import cards from './cards';

// The root reducer, the overall logical driver for the app.
// Currently does not need to be broken down into more reducers,
// but probably will be in the future.
export const rootReducer = combineReducers({
  lists,
  cards
});
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
