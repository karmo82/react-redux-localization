import * as actionTypes from '../actions/action-types';
import initialState from './initial-state';

export default function shopReducer(state = initialState.shop, action){
    switch(action.type){
        case actionTypes.SHOPLIST_REQUEST:
            return {...state, list: action.data.data}
        case actionTypes.SHOPGET_REQUEST:
            console.log("shop get ");
            console.log(action);
            return {...state, entity: action.data.data}
        default:
            return state;
    }
}