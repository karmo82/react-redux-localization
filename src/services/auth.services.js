import * as httpHolder from './http-holder';

export function login(username, pwd){
    var request = {
        username,
        password: pwd
    };

    return httpHolder.GetHttpHolder().post('/api/authentication/login', request);

}