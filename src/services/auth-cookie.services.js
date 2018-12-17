import Cookies from 'js-cookie';

// nome del cookie 
var keyBase = 'ReactApp_';
// separatore delle info salvate dentro il cookie
var dataSeparator = '§';

/**
 * restituisce nome del cookie dove verranno salvati user e pwd
 */
export function getAppCookieName() {
    var name = window.location.hostname + "_" + keyBase;
    return name;
}

/**
 * cancella cookie di auth
*/
export function deleteAppCookie(){
    Cookies.remove(getAppCookieName());
}

/**
 *  salva user e pwd nel cookie, con cifratura base64
 */
export function saveApplication(user, password){
    var today = new Date();
    var expiresValue = new Date(today);

    /*
        faccio scadere il cookie dopo 120 mn
    */
    expiresValue.setMinutes(today.getMinutes() + 120);

    /*
        cifro user e pwd in base64
    */
    var data = btoa(user) + dataSeparator + btoa(password);

    /*
        per sicurezza rimuovo il precedente cookie e salvo
    */
    Cookies.remove(getAppCookieName());
    Cookies.set(getAppCookieName(), data, {expires: expiresValue});
}

/**
 * restituisce info su username e pwd
*/
export function getAppCookie(){
    var cookiedata = Cookies.get(getAppCookieName());
    if (!cookiedata) {
        return null;
    }

    var appData = { username: '', pwd: '' };

    var arr = cookiedata.split(dataSeparator);
    /*
        username e pwd sono decifrate, base64 --> in chiaro
    */
    if (arr && arr.length > 0) {
        appData.username = atob(arr[0]);
        appData.pwd = atob(arr[1]);
    }

    return appData;
}
