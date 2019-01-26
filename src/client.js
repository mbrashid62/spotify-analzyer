import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import buildStore from './redux/store/buildStore';

import App from './components/App';

const store = buildStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
