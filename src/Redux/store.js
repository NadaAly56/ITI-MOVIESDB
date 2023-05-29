import {compose, createStore} from 'redux';
import { MovieReducer } from './Reducers/MovieReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTION__COMPOSE__ || compose;
export const store = createStore(MovieReducer, composeEnhancers());