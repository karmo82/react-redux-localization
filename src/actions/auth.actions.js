import * as actionTypes from './action-types';
import * as authServices from '../services/auth.services';
import * as cookieServices from '../services/auth-cookie.services';

export function getActionUserLogged(user){
    return {
        type: actionTypes.AUTHLOGIN_REQUEST,
        data: user
    }
}

export function login(username, pwd){
    return function(dispatch){
        authServices.login(username, pwd).then(
            result => {
                console.info("login ok");
                cookieServices.saveApplication(username, pwd);
                
                dispatch(getActionUserLogged(result));
            },
            error => {
                console.log(error);
            }
        );
    }
}