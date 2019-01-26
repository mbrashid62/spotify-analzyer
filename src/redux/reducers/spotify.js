/* eslint-disable import/prefer-default-export */
const initialState = {
  userId: '',
  playlists: [],
  accessToken: '',
};

export const spotify = (state = initialState, action = { type: '', payload: {} }) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
};
