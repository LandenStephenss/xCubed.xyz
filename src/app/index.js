import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers'
import * as actions from './actions/index.js';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancer(
        applyMiddleware(thunk)
    )
)

window.mainStore = store;



ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);


fetch('/oauth/state', { credentials: 'same-origin' })
  .then(r => r.json())
  .then(res => {
    if (res) {
      store.dispatch(actions.login(res));
    }
  });