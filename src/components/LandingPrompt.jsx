import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/LandingContainer.scss';
import {

} from '../redux/actions/spotify';
import { apiCreds } from "../configs/spotify-auth";


const getAuthUrl = (credentials) => {
  return `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(credentials.clientId)}&scope=${credentials.scope}&redirect_uri=${encodeURIComponent(credentials.redirect_uri)}&state=${encodeURIComponent(credentials.state)}`;
};

export class LandingPrompt extends Component {

  static displayName = 'src/components/LandingPrompt';

  static defaultProps = {
    isConnected: false,
  };

  state = {
    authUrl: ''
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.authUrl) {
      return {
        ...state,
        authUrl: getAuthUrl(apiCreds),
      }
    }

    return null;
  }

  onClick = (e) => {
    e.preventDefault();

    if (this.state.authUrl) {
      window.location = this.state.authUrl;
    }
  };

  render() {
    return (
      <div className="landing-container">
        <button className="action-btn" onClick={this.onClick}>Connect to Spotify</button>
      </div>
    );
  }
}

export default connect((state) => ({
  isConnected: state,
}), ({
  // dispatchConnectToSpotify,
  // dispatchSetCredentials
}))(LandingPrompt);
