import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Field from './Field';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import fieldReducer from './reducers/fieldReducer'

//reduvers são função puras
const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field inicialValor="teste" />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
