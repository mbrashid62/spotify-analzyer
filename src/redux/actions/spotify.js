/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import SpotifyWebApi from 'spotify-web-api-node';
import {
  wrapperCreds,
  apiCreds,
} from '../../configs/spotify-auth';

const spotifyApi = new SpotifyWebApi(wrapperCreds);

export const createAccessToken = () => {
  return {
    type: '',
    payload: {},
  };
};
