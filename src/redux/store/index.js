import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import promise from "redux-promise-middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, storeEnhancers(applyMiddleware(promise)));

export default store;
