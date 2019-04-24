import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  invest: 0,
  interestRate: 9,
  time: 50,
  profit: 0
};

const reducer = (state = initialState, action) => {
  
  const computeProfit = (invest, rate, time) => {
    invest = parseInt(invest);
    rate = parseInt(rate);
    time = parseInt(time);
    let profit = invest * 1000 * Math.pow(1 + rate / 100 / 12, time);
    profit = profit - invest * 1000;
    return Math.floor(profit);
  };

  switch (action.type) {
    case "SET_INVEST":
      return {
        ...state,
        invest: action.payload,
        profit: computeProfit(state.invest, state.interestRate, state.time)
      };
    case "SET_TIME":
      return {
        ...state,
        time: action.payload,
        profit: computeProfit(state.invest, state.interestRate, state.time)
      };
    case "SET_INVEST_RATE":
      if (action.payload === "conservativeRate") {
        return {
          ...state,
          interestRate: 9,
          profit: computeProfit(state.invest, state.interestRate, state.time)
        };
      } else if (action.payload === "balancedRate") {
        return {
          ...state,
          interestRate: 18,
          profit: computeProfit(state.invest, state.interestRate, state.time)
        };
      } else {
        return {
          ...state,
          interestRate: 25,
          profit: computeProfit(state.invest, state.interestRate, state.time)
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
