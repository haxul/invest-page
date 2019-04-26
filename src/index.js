import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  invest: 1,
  interestRate: 9,
  time: 36
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "SET_INVEST":
      return {
        ...state,
        invest: action.payload
      };
    case "SET_TIME":
      return {
        ...state,
        time: action.payload
      };
    case "SET_INVEST_RATE":
      if (action.payload === "conservativeRate") {
        return {
          ...state,
          interestRate: 9
        };
      } else if (action.payload === "balancedRate") {
        return {
          ...state,
          interestRate: 18
        };
      } else {
        return {
          ...state,
          interestRate: 25
        };
      }
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
