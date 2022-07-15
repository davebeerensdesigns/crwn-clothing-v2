import {compose, createStore, applyMiddleware} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import {logger} from "redux-logger/src";

import {rootReducer} from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type:', action.type);
    console.log('payload:', action.payload);
    console.log('currentState:', store.getState());

    next(action);

    console.log('newState:', store.getState());
}

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [loggerMiddleware];

// const middlewares = [logger];

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);