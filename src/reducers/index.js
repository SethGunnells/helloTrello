// Aggregrate file for reducers. Contains the root reducer.
import { combineReducers } from 'redux';
import lists, * as fromLists from './lists';
import cards, * as fromCards from './cards';
import cardUnderEdit from './cardUnderEdit';

// The root reducer, the overall logical driver for the app.
// Currently does not need to be broken down into more reducers,
// but probably will be in the future.
export const rootReducer = combineReducers({
  lists,
  cards,
  cardUnderEdit
});

/**
 * SELECTORS
 */
export const getAllLists = (state) => {
  // Get all the lists and make shallow copies
  var lists = fromLists.getAllLists(state.lists);
  return lists
    .map(list => {
      var cards = fromCards.getCardsByListId(state.cards, list.id);
      list = list.set('cards', cards);
      return list;
    });
};

export function getCardUnderEdit(state) {
  return fromCards.getCardById(state.cards, state.cardUnderEdit);
}
