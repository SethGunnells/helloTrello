import { getCardById } from '../entities/cards';

const unpack = state => state.getIn(['ui', 'cardUnderEdit']);

export function getCardUnderEdit(state) {
  return getCardById(state, unpack(state));
}
