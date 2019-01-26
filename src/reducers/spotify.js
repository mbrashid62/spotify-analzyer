const initialState = {
  userId: '',
  playlists: [],
  accessToken: '',
};
export function spotify(state = initialState, action = { type: '', payload: {} }) {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
}
