import React from 'react';

import ViewList from './containers/ViewList';
import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from 'app/reducers/list'
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import withAuthorities from "../../decorators/withAuthorities";
const rootReducer = combineReducers({
    animal: reducer,
});
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
);
export default withAuthorities (props => (
    <Provider store={store}>
        <ViewList {...props} />
    </Provider>
));