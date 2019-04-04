import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
