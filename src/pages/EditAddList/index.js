import React from 'react';

import EditAddList from './containers/EditAddList';
import withAuthorities from "../../decorators/withAuthorities";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from "../../app/reducers/list";
import thunkMiddleware from "redux-thunk";
const rootReducer = combineReducers({
    animalById: reducer,
});
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
);
export default withAuthorities (props => (
    <Provider store={store}>
        <EditAddList {...props} />
    </Provider>
));