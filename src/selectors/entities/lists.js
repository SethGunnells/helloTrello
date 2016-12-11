import { getCardsByListId } from './cards';

const unpack = state => state.getIn(['entities', 'lists']);

export function getAllListIds(state) {
  return unpack(state).keySeq();
}

export function getListById(state, props) {
  return unpack(state).get(props.id);
}

export function getCardIdsForList(state, props) {
  return unpack(state).get(props.id).cards;
}
