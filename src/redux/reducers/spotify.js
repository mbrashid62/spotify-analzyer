const initialState = {
  userId: '',
  playlists: [],
  accessToken: '',
};

const spotify = (state = initialState, action = { type: '', payload: {} }) => {
  switch(action.type) {
    case '':
      return state;
    default:
      return state;
  }
}

export default spotify;
