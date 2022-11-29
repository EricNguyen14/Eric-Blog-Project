import { createStore, applyMiddleware, compose } from "redux";
import budgetReducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const budgetStore = createStore(
  budgetReducer,
  composeEnhancers(applyMiddleware())
);
export default budgetStore;
