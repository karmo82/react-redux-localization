import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoginComponent from '../components/login.component';
import * as authActions from '../actions/auth.actions';
import { Translate, getTranslate } from "react-localize-redux";

class LoginPage extends Component {
    
    constructor(props){
        super(props);
        console.log("login");
        console.log(this.props);

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
        console.log("login click ");
        console.log(this.state);
        this.props.login(this.state.username, this.state.password);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">
                            <Translate id="Login.PageTitle"></Translate>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <LoginComponent username={this.state.username} password={this.state.password} 
                            handleOnPasswordChanged={this.handleOnPasswordChanged}
                            handleOnUsernameChanged={this.handleOnUsernameChanged}
                            handleOnSubmit={this.handleOnSubmit}
                            isLogged={this.props.isLogged}
                        ></LoginComponent>      
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: (username, pwd) => dispatch(authActions.login(username, pwd)),
    }
}

function mapStateToProps(state) {
    return {
        isLogged: state.auth.isLogged
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);