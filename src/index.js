import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import todoReducers from './reducers'

const store = createStore(todoReducers);
render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'));