import { createSelector } from 'reselect';

import { getCardIdsForList } from './lists';

const unpack = state => state.getIn(['entities', 'cards']);

function getAllCards(state) {
  return unpack(state);
}

export function getCardById(state, id) {
  return unpack(state).get(id);
}

export function getCardsForList() {
  return createSelector(
    getCardIdsForList, getAllCards,
    (ids, cards) => ids.map(id => cards.get(id))
  );
}
