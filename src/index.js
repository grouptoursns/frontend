import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./app.js"
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReduser from "./reduser/rootReduser";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n/index"

const store = createStore(
    rootReduser,
    applyMiddleware(thunk)
);
window.store = store;

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <App/>
        </Provider>
    </I18nextProvider>,

    document.getElementById('root')
);


