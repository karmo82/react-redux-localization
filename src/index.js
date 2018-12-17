import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';

import configureStore from './store/configure-store';
import {Provider} from 'react-redux';
import { LocalizeProvider } from "react-localize-redux";

const store = configureStore();

const app = 
<LocalizeProvider>
    <Provider store={store} >
        <App />
    </Provider>
</LocalizeProvider>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
