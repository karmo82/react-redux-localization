import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageToggleComponent from '../components/language-toggle.component';
import './header.container.css'
import { Translate } from "react-localize-redux";

class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">
                    <Translate id="GLOBAL.AppName"></Translate>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="" className="nav-link" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link" >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/gamenine" className="nav-link" >Game nine</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shops" className="nav-link" activeClassName="menuActive" >Shops</NavLink>
                        </li>

                        <LanguageToggleComponent></LanguageToggleComponent>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;