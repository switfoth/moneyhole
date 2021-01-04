import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session.js'
import commentReducer from './comment.js'
import projectReducer from './project.js'
import paymentReducer from './payment.js'
import rewardReducer from './reward.js'
import goalReducer from './goal.js'
import paymentMethodReducer from './paymentmethod.js'

const rootReducer = combineReducers({
  session: sessionReducer,
  project: projectReducer,
  comment: commentReducer,
  payment: paymentReducer,
  reward: rewardReducer,
  goal: goalReducer,
  paymentmethod: paymentMethodReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
