import React, { Component } from 'react';
import ShopEditContainer from '../../containers/shops/shop-edit.container';

class ShopEditPage extends Component {
    /*
        il componente ShopEditContainer non avrà le props con le info su match e url
        perchè nel router è stato definito come componente questa pagina! quindi è questa pagina ad avere le info richieste.
        al max posso ri-passargliele come props
    */
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Edit Shop</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ShopEditContainer match={this.props.match} ></ShopEditContainer>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ShopEditPage;