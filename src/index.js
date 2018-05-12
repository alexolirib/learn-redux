import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

//reduvers são função puras
const reducers = combineReducers({
    field: () => ({ value: 'opa'})
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App inicialValor="teste" />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
