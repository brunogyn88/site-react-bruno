import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faStroopwafel, faMobileAlt, faCode, faFileCode,
    faLaptopCode, faKeyboard
} from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
    faStroopwafel, faMobileAlt, faCode, faFileCode, faLaptopCode, faKeyboard, fab)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
