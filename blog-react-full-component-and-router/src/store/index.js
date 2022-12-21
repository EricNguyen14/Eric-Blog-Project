import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postReducer from "./post/reducer";
import categoryReducer from "./category/reducer";
import menuReducer from "./menu/reducer";

const rootReducer = combineReducers({
  POST: postReducer,
  CATEGORY: categoryReducer,
  MENU: menuReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
