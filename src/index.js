import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    //component that once passed from the store we can dispatch or pull actions form the store
    <Provider store={store}>
        <BrowserRouter>
         <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

