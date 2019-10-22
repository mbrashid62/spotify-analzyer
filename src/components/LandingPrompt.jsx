/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/LandingContainer.scss';

import { apiCreds } from '../configs/spotify-auth';
import {
  getUserId,
  getUserPlaylists,
} from '../redux/actions/spotify';

import DialogueBox from './Generic/DialogueBox';
import Dashboard from './Dashboard/Dashboard';

const getAuthUrl = (credentials) => {
  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(credentials.clientId)}&scope=${credentials.scope}&redirect_uri=${encodeURIComponent(credentials.redirect_uri)}&state=${encodeURIComponent(credentials.state)}`;
  return url;
};

const getAccessTokenFromLocation = () => {
  // eslint-disable-next-line no-restricted-globals
  const token = window.location.hash && window.location.hash.includes('access_token') ? location.hash.split('=')[1].split('&')[0] : '';
  return token;
};

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
      };
    }

    return null;
  }

  componentDidMount() {
    const {
      isAccessTokenSet,
      accessToken,
    } = this.state;
    const { dispatchGetUserId } = this.props;
    if (accessToken && !isAccessTokenSet) {
      const { spotifyApi } = window;
      spotifyApi.setAccessToken(accessToken);
      this.setState({ isAccessTokenSet: true });
      dispatchGetUserId();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      userId,
      dispatchGetUserPlaylists,
    } = this.props;

    if (!prevProps.userId && userId) {
      dispatchGetUserPlaylists(userId);
    }
  }

  onConnectClick = (e) => {
    e.preventDefault();
    this.setState({ showDialogue: true });
  };

  onSecurityDialogueAccept = () => {
    const { authUrl } = this.state;
    this.setState({ showDialogue: false });
    window.location = authUrl;
  };

  onSecurityDialogueReject = () => {
    this.setState({ showDialogue: false });
  };

  render() {
    const {
      isAccessTokenSet,
      showDialogue,
    } = this.state;

    if (isAccessTokenSet) {
      return <Dashboard />;
    }

    return (
      <div className="landing-container">
        {!isAccessTokenSet && (
          <button
            type="button"
            className="action-btn"
            onClick={this.onConnectClick}
          >
            Connect to Spotify
          </button>
        )}
        <DialogueBox
          isOpen={showDialogue}
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

LandingPrompt.propTypes = {
  userId: PropTypes.string,
  dispatchGetUserId: PropTypes.func,
  dispatchGetUserPlaylists: PropTypes.func,
};

export default connect((state) => ({
  userId: state.spotify.userId,
}), {
  dispatchGetUserId: getUserId,
  dispatchGetUserPlaylists: getUserPlaylists,
})(LandingPrompt);
