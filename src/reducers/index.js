import {combineReducers } from 'redux';
import shops from './shop.reducer';
import auth from './auth.reducer';

const rootReducer = combineReducers({
    // nello store verrà creato uno state di nome courses, utilizzabile dai componenti react
    shops,
    auth
});

export default rootReducer;