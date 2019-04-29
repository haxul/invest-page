import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";
import Diagram from "./components/Diagram.js";
import rubleIcon from "./icons/ruble.png";

export function setSpaceBetweenNumber(number) {
    number += "";
    number = number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    return number;
}

class App extends Component {

  setInvest = e => {
    this.props.dSetInvest(e.target.value);
  };

  setTimeInvest = e => {
    this.props.dSetTimeInvest(e.target.value);
  };

  setInvestRate = e => {
    this.props.dsetRate(e.target.id);
  };

  render() {
    return (
      <div className="container" id="wrapper">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-5 border path pt-3 pb-3 radiused">
            {" "}
            <h4 className="pb-4">Калькулятор доходности портфеля</h4>
            <p className="underLable">Сумма инвестрирования</p>
            <p className=" investSum py-0">
              <span>{setSpaceBetweenNumber(this.props.store.invest)} 000</span>{" "}
              <img
                style={{ marginBottom: "2px" }}
                src={rubleIcon}
                style={{ height: "16px" }}
              />
            </p>
            <input
              type="range"
              className="form-control-range range"
              id="formControlRange"
              max="1000"
              min="1"
              step="1"
              onInput={this.setInvest}
            />
            <p className="underLable mb-0 py-3">Срок</p>
            <p className="investSum">{this.props.store.time} мес.</p>
            <input
              className="form-control-range range"
              id="formControlRange"
              type="range"
              min="1"
              max="36"
              step="1"
              name="input"
              onInput={this.setTimeInvest}
            />
            <div className="mt-5">
              <label
                className="container2"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamaly: "Helvetica Neue sans-serif"
                }}
              >
                Консервативный
                <input
                  type="radio"
                  defaultChecked
                  name="radio"
                  onChange={this.setInvestRate}
                  id="conservativeRate"
                />
                <span className="checkmark" />
              </label>
              <label
                className="container2"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamaly: "Helvetica Neue sans-serif"
                }}
              >
                Сбалансированный
                <input
                  type="radio"
                  name="radio"
                  onChange={this.setInvestRate}
                  id="balancedRate"
                />
                <span className="checkmark" />
              </label>
              <label
                className="container2"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamaly: "Helvetica Neue sans-serif"
                }}
              >
                Рискованный
                <input
                  type="radio"
                  name="radio"
                  onChange={this.setInvestRate}
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="col-10 col-sm-7 border mt-sm-2 mb-sm-2 path twosiderad">
            <Diagram />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    dSetInvest: num => {
      dispatch({ type: "SET_INVEST", payload: num });
    },
    dSetTimeInvest: time => {
      dispatch({ type: "SET_TIME", payload: time });
    },
    dsetRate: rate => {
      dispatch({ type: "SET_INVEST_RATE", payload: rate });
    }
  })
)(App);
