import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';

import './styles/_app.scss';
import App from './App';
import thunk from 'redux-thunk';

const store = createStore(reducers
    );

ReactDOM.render(
    (
        <Provider store={store}>
            <App  />
        </Provider>
    ),
    document.getElementById('root')
);


