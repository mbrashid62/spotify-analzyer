/* eslint-disable import/prefer-default-export */
import { SPOTIFY_ACTIONS } from '../actions/spotify';

const initialState = {
  userId: '',
  playlists: [],
  accessToken: '',
};

export const spotify = (state = initialState, action = { type: '', payload: {} }) => {
  switch (action.type) {
    case SPOTIFY_ACTIONS.GET_USER_ID:
      return {
        ...state,
        userId: action.payload.id,
      };
    case SPOTIFY_ACTIONS.GET_USER_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    default:
      return state;
  }
};
