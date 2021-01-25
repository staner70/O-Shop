export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SEARCH_CHANGE_FIELD = 'SEARCH_CHANGE_FIELD';
export const CHANGE_ADD_USER_FIELD = 'CHANGE_ADD_USER_FIELD';

// action creator
// une fonction pure qui renvoie une action
export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  name,
  value,
});

export const searchChangeField = (searchField, searchText) => ({
  type: SEARCH_CHANGE_FIELD,
  searchField: searchField,
  searchText: searchText,
});

export const changeAddUserField = (value, name) => ({
  type: CHANGE_ADD_USER_FIELD,
  value,
  name,
});



