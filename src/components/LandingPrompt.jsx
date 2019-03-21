import React, { Component } from 'react';
import '../styles/LandingContainer.scss';

import { apiCreds } from "../configs/spotify-auth";

import Welcome from './Welcome';

const getAuthUrl = (credentials) => `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(credentials.clientId)}&scope=${credentials.scope}&redirect_uri=${encodeURIComponent(credentials.redirect_uri)}&state=${encodeURIComponent(credentials.state)}`;

const getAccessTokenFromLocation = () => window.location.hash && window.location.hash.includes('access_token') ? location.hash.split('=')[1].split('&')[0] : '';

class LandingPrompt extends Component {

  static displayName = 'src/components/LandingPrompt';

  state = {
    authUrl: '',
    accessToken: '',
    isAccessTokenSet: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.authUrl || !state.accessToken) {
      return {
        ...state,
        authUrl: getAuthUrl(apiCreds),
        accessToken: getAccessTokenFromLocation(),
      }
    }

    return null;
  }

  componentDidMount(prevProps, prevState, prevContext) {
    if (this.state.accessToken && !this.state.isAccessTokenSet) {
      const spotifyApi = window.spotifyApi;
      spotifyApi.setAccessToken(this.state.accessToken);
      this.setState({ isAccessTokenSet: true });
    }
  }

  onClick = (e) => {
    e.preventDefault();

    if (this.state.authUrl) {
      window.location = this.state.authUrl;
    }
  };

  render() {
    const spotifyApi = window.spotifyApi;
    // spotifyApi.getUser()
    return (
      <div className="landing-container">
        <button className="action-btn" onClick={this.onClick}>Connect to Spotify</button>
      </div>
    );
  }
}

export default LandingPrompt;
