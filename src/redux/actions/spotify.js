// const { spotifyApi } = window;

export const SPOTIFY_ACTIONS = {
  GET_USER_ID: 'GET_USER_ID',
  GET_USER_PLAYLISTS: 'GET_USER_PLAYLISTS',
};

export const getUserId = (id = '') => {
  const { spotifyApi } = window;
  return (dispatch) => {
    spotifyApi.getMe()
      .then((res) => {
        dispatch({
          type: SPOTIFY_ACTIONS.GET_USER_ID,
          payload: {
            id: res.body.id,
          },
        });
      });
  };
};

export const getUserPlaylists = (userId = '') => {
  const { spotifyApi } = window;
  return (dispatch) => {
    spotifyApi.getUserPlaylists(userId)
      .then((res) => {
        dispatch({
          type: SPOTIFY_ACTIONS.GET_USER_PLAYLISTS,
          payload: {
            playlists: res.body.items,
          },
        });
      });
  };
};
