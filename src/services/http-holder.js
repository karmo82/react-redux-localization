import axios from 'axios';
import * as cookieServices from './auth-cookie.services';

/**
 * converte carattere in codice ASCII
 * @param {*} a
 */
export function charToAscii(a) { return "&#" + a.charCodeAt(0) + ";"; }

export function getBase64Credentials() {

    const dataSeparator = "§";
    /*
        recupero le credenziali basic in chiaro
    */
    var appData = cookieServices.getAppCookie();
    if(!appData) return null;

    var combination = appData.username + charToAscii(dataSeparator) + appData.pwd;

    /*
        restituisco tutta la stringa cifrata in base64
    */  
    return btoa(combination);
}

export function GetHttpHolder(){

    return axios.create({
        baseURL:"https://localhost:44371",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Basic ' + getBase64Credentials()
            },
        crossdomain: true
      });
}