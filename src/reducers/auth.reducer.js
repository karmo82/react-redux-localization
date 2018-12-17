import * as actionTypes from '../actions/action-types';
import initialState from './initial-state';

export default function authReducer(state = initialState.user, action){
    
    switch(action.type){
        case actionTypes.AUTHLOGIN_REQUEST:
            console.log("auth reducer");
            console.log(action);

            return {...state, isLogged: true, username: action.data.data.userName}

        default: 
            return state;

    }
}