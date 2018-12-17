import React, { Component } from 'react';
import LoginComponent from '../../components/login.component';
import {connect} from 'react-redux';
import * as authActions from '../../actions/auth.actions';
import { Translate } from "react-localize-redux";

class LoginContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnUsernameChanged = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleOnPasswordChanged = (event) => {
        console.log(event);
        this.setState({
            password: event.target.value
        });
    }

    handleOnSubmit =() => {
        console.log(this.state);
        this.props.login(this.state.username, this.state.password);
        //this.props.history.push('/');
    }

    render() {
        console.log("isLogged");
        console.log(this.props.isLogged);
        return (
            <div>
                <Translate id="Login.UserLoggedIn"></Translate>
                <LoginComponent username={this.state.username} password={this.state.password} 
                handleOnPasswordChanged={this.handleOnPasswordChanged}
                handleOnUsernameChanged={this.handleOnUsernameChanged}
                handleOnSubmit={this.handleOnSubmit}
                isLogged={this.props.isLogged}
                ></LoginComponent>                
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: (username, pwd) => dispatch(authActions.login(username, pwd))
    }
}

function mapStateToProps(state) {
    return {
        isLogged: state.auth.isLogged
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);