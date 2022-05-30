import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import userReducer from './reducer/reducer';
import {watcherSaga} from './reducer/rootSaga';

const reducer = combineReducers({
  //   counter: counterReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
