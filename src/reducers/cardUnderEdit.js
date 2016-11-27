import { types } from '../actions';

export default function cardUnderEdit(state = null, action) {
  switch (action.type) {
    case types.EDIT_CARD:
      return action.cardId;
    case types.SAVE_CARD:
      return null;
    default:
      return state;
  }
}
