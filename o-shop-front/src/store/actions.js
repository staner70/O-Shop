export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';

// action creator
// une fonction pure qui renvoie une action
export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  name,
  value,
});

// todo : finir de typer toutes les actions
