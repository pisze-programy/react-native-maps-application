import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(
        applyMiddleware(
            createLogger()
        )
    )
  );
};

export default configureStore;
