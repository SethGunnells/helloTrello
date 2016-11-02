const FETCH_URL = '/lists?_embed=cards';

export const FETCH_LISTS = 'FETCH_LISTS';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';

/**
 * Relies on Redux thunk middleware
 */
export const fetchLists = () => (dispatch) =>
  fetch(FETCH_URL).then(response => response.json())
  .then((result) => {
    dispatch({
      type: RECEIVE_LISTS,
      lists: result
    });
  });
