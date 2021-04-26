import React from "react";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {currentList} from './reducers';
import ReactDOM from "react-dom";
import App from "./containers/App";
const logger = createLogger();
const store = createStore(currentList,applyMiddleware(logger));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
