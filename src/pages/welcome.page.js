import React, { Component } from 'react';
import { Translate } from "react-localize-redux";

class WelcomePage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">
                            <Translate id="GLOBAL.Welcome"></Translate>
                        </h1>
                        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomePage;