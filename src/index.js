import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './routes/App';
import reducer from './reducers/';
import {HashRouter} from 'react-router-dom';

const initialState = {};
const store = createStore(reducer,initialState);
ReactDOM.render(
<Provider store={store}>
  
        <App/>
    
</Provider>,
document.getElementById('app'));