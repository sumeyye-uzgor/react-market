import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducer";

// const middlewares = [thunk];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
