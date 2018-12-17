import * as actionTypes from './action-types';
import * as shopServices from '../services/shop.services';

export function getActionFetchShops(list){
    return {
        type: actionTypes.SHOPLIST_REQUEST,
        data: list
    }
}

export function getActionGetShop(entity){
    return {
        type: actionTypes.SHOPGET_REQUEST,
        data: entity
    }
}

export function fetchShops(){
    return function(dispatch){
        shopServices.fetchShops().then(
            response => {
                console.log("shops received!");
                console.log(response);
                dispatch(getActionFetchShops(response));
            },
            error => {
                console.log(error)
            }
        );
    }
}

export function getShop(id){
    return function(dispatch){
        shopServices.getShop(id).then(response => {
            console.log("shop received!");
            console.log(response);
            dispatch(getActionGetShop(response));
        }, 
        error => {
            console.log(error)
        });
    }
}