import React, { Component } from 'react';
import ShopsIndexContainer from '../../containers/shops/shops-index.container';
import { Translate } from "react-localize-redux";

class ShopsIndexPage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">
                            <Translate id="ShopsIndex.PageTitle"></Translate>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ShopsIndexContainer   ></ShopsIndexContainer>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ShopsIndexPage;