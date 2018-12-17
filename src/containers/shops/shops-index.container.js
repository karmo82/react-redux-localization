import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as shopActions from '../../actions/shop.action';
import { NavLink } from 'react-router-dom';
import { Translate } from "react-localize-redux";

class ShopsIndexContainer extends Component {

    componentDidMount() {
        this.props.loadList();
    }

    render() {
        console.log("shps index render");
        console.log(this.props.list);
        return (
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">
                                <Translate id="GLOBAL.Name"></Translate>
                            </th>
                            <th scope="col">
                                <Translate id="GLOBAL.Description"></Translate>
                            </th>
                            <th scope="col">
                                <Translate id="GLOBAL.Price"></Translate>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((x, i) => <tr key={i}>
                            <td>{x.id}</td>
                            <td>{x.nome}</td>
                            <td>{x.descrizione}</td>
                            <td>{x.prezzo}</td>
                            <td> <NavLink to={'/shop/' + x.id}>Edit</NavLink> </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.shops.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadList: () => dispatch(shopActions.fetchShops())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopsIndexContainer);