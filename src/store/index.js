import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import logger from 'redux-logger';
import promise from 'redux-promise';



let store = createStore(reducer, applyMiddleware(logger, promise));
export default store;