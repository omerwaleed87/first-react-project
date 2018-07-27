import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 

import reducer from './store/reducer';

import './index.css';
import App from './container/App';

import registerServiceWorker from './registerServiceWorker';

const logger = store => {
    return next => {
        return action => {
            console.log("[MIDDLEWARE] Dispatching", action);
            const result = next(action);
            console.log("[MIDDLEWARE] next state", store.getState());
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();