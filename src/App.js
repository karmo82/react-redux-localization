import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './containers/header.container';
import routes from './routes';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";
import itTranslations from './localization/translations-it.json'
import enTranslations from "./localization/translations-en.json";
import { withLocalize } from "react-localize-redux";

class App extends Component {
  constructor(props){
    super(props);

    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "Italiano", code: "it" }
      ],
      
      options: {defaultLanguage: "it", renderToStaticMarkup }
    });

    this.props.addTranslationForLanguage(enTranslations, "en" );
    this.props.addTranslationForLanguage(itTranslations, "it");
    this.props.setActiveLanguage("it");
  }

  render() {
    return (
      <Router>
        <div>
            <HeaderComponent></HeaderComponent>
            <hr></hr>
            <div className="container">
              {routes.map((route, i) => <Route exact key={i} path={route.path} component={route.component} ></Route>) }
            </div>
            
        </div>
        </Router>
    );
  }
}

export default withLocalize(App)
