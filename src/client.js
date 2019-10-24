/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SpotifyWebApi from 'spotify-web-api-node';

import buildStore from './redux/store/buildStore';
import { wrapperCreds } from './configs/spotify-auth';

import AppRoot from './components/App';

const store = buildStore();

if (typeof window !== 'undefined') {
  window.spotifyApi = new SpotifyWebApi(wrapperCreds);
  ReactDOM.render(
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route path="/" component={AppRoot} />
      </Router>
    </Provider>,
    document.getElementById('app'), // eslint-disable-line no-undef
  );
}
