import React from 'react';
import ReactDOM from 'react-dom';
import Field from './Field';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import fieldReducer from './reducers/fieldReducer'
import Count from './Count'
import countReducer from './reducers/countReducer'

//reduvers são função puras
const reducers = combineReducers({
    field: fieldReducer,
    count: countReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        {/*<Field /> */}
        <Count />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
