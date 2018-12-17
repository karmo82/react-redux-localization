import React from 'react';
import { Translate } from "react-localize-redux";

const LoginComponent = (props) => {

    return (
        <div>
            <div className="form-group">
                <label htmlFor="username">
                    <Translate id="Login.Username"></Translate>
                </label>
                <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Enter username"
                    onChange={props.handleOnUsernameChanged}
                    value={props.username} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1"><Translate id="Login.Password"></Translate></label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    onChange={props.handleOnPasswordChanged}
                    value={props.password} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={props.handleOnSubmit} >
                <Translate id="Login.Submit"></Translate>
            </button>
            {
                props.isLogged ? <div className="alert alert-success" >
                    <Translate id="Login.UserLoggedIn"></Translate>
                </div> : null
            }
        </div>
    );
};

export default LoginComponent;