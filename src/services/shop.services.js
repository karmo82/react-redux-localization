import * as httpHolder from './http-holder';

export function fetchShops(){
    return httpHolder.GetHttpHolder().get('/api/Negozio/fetch');
}

export function getShop(id){
    var request = {
        id
    };
    return httpHolder.GetHttpHolder().post('/api/Negozio/get/', request);
}