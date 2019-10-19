import React, { Component } from 'react';
import '../styles/LandingContainer.scss';

import { apiCreds } from "../configs/spotify-auth";

import DialogueBox from './Generic/DialogueBox';
import Dashboard from './Dashboard/Dashboard';

const getAuthUrl = (credentials) => `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(credentials.clientId)}&scope=${credentials.scope}&redirect_uri=${encodeURIComponent(credentials.redirect_uri)}&state=${encodeURIComponent(credentials.state)}`;

const getAccessTokenFromLocation = () => window.location.hash && window.location.hash.includes('access_token') ? location.hash.split('=')[1].split('&')[0] : '';

class LandingPrompt extends Component {
  static displayName = 'src/components/LandingPrompt';

  state = {
    authUrl: '',
    accessToken: '',
    isAccessTokenSet: false,
    showDialogue: false,
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

  onConnectClick = (e) => {
    e.preventDefault();
    this.setState({ showDialogue: true });
  };

  onSecurityDialogueAccept = (e) => {
    this.setState({ showDialogue: false });
    window.location = this.state.authUrl;
  }

  onSecurityDialogueReject = () => {
    this.setState({ showDialogue: false });
  }
  render() {
    const spotifyApi = window.spotifyApi;
    // spotifyApi.getUser()
    return (
      <div className="landing-container">
        {!this.state.isAccessTokenSet ? (
          <button className="action-btn" onClick={this.onConnectClick}>Connect to Spotify</button>
        ) : (
          <Dashboard />
        )}
        <DialogueBox
          isOpen={this.state.showDialogue}
          headerText="Welcome!"
          messageText="You will be asked to connect to your Spotify account for authentication purposes. This app will never collect any of your data."
          actionText="Got it"
          onAction={this.onSecurityDialogueAccept}
          onClose={this.onSecurityDialogueReject}
        />
      </div>
    );
  }
}

export default LandingPrompt;
