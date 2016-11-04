import { normalize, Schema, arrayOf } from 'normalizr';

// Constants
const FETCH_URL = '/lists?_embed=cards';

// Action types
export const FETCH_LISTS = 'FETCH_LISTS';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';

// Normalizr schemas
const List = new Schema('lists');
const Card = new Schema('cards');

List.define({
  cards: arrayOf(Card)
});

/**
 * Relies on Redux thunk middleware
 */
export const fetchLists = () => (dispatch) => {
  dispatch({
    type: FETCH_LISTS
  });

  return fetch(FETCH_URL).then(response => response.json())
    .then((response) => {
      dispatch({
        type: RECEIVE_LISTS,
        response: normalize(response, arrayOf(List))
      });
    });
};
