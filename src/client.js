/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import buildStore from './redux/store/buildStore';

import AppRoot from './components/App';

const store = buildStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('app'), // eslint-disable-line no-undef
);
