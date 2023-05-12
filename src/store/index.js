import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers.js';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);

export default store;