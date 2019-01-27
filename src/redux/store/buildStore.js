/* eslint-disable no-undef no-underscore-dangle*/
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import rootReducer from '../reducers/root';

const getComposeEnhancers = () => {
  if (process.env.NODE_ENV !== 'development') {
    return () => {};
  }
  return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-undef no-underscore-dangle
};

const buildStore = () => {
  const composeEnhancers = getComposeEnhancers();
  return createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
};

export default buildStore;
