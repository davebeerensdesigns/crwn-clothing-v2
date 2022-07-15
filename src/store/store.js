import {compose, createStore, applyMiddleware} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {logger} from "redux-logger/src";
// import {loggerMiddleware} from "./middleware/logger";

import {rootSaga} from "./root-saga";
import createSagaMiddleware from "redux-saga";

import {rootReducer} from "./root-reducer";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middlewares = [process.env.NODE_ENV !== 'production' && loggerMiddleware].filter(
//     Boolean
// );

const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
].filter(
    Boolean
);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);