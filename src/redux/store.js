import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootRuducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootRuducer, applyMiddleware(...middlewares));

export default store;
