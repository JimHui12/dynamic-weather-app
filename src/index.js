import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';

import './App.css';
import App from './App';

const store = createStore(reducers);

ReactDOM.render(
    (
        <Provider store={store}>
            <App  />
        </Provider>
    ),
    document.getElementById('root')
);


