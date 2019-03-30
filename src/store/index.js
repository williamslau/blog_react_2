import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';

import reducer from './reducers';

let store = createStore(reducer,applyMiddleware(promise));
export default store;