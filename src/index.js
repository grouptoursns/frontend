import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./app.js"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReduser from "./reduser/rootReduser";

const store = createStore(
  rootReduser,
applyMiddleware(thunk)
);
window.store = store;

ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root')
);


