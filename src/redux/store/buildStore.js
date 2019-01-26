import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import rootReducer from '../reducers/root';

const buildStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  return createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
};

export default buildStore;
