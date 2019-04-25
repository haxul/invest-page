import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";
import Diagram from "./components/Diagram.js";

class App extends Component {

  setSpaceInNumber = number => {
    number += "";
    number = number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    return number;
  };

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
      <div
        className="container"
        style={{
          marginTop: "9%",
          marginBottom: "10%"
        }}
      >
        <div className="row justify-content-center">
          <div className="col-11 col-sm-5 border path pt-3 pb-3">
            {" "}
            <h4 className="">Калькулятор доходности </h4>
            <p className="">Сумма инвестрирования</p>
            <p className="">
              <span>{this.setSpaceInNumber(this.props.store.invest)} 000</span>{" "}
              <span> P</span>
            </p>
            <input
              type="range"
              className="form-control-range"
              id="formControlRange"
              max="1000"
              min="1"
              step="1"
              onInput={this.setInvest}
            />
            <p className="">Сроки</p>
            <p className="">
              {this.props.store.time} <span> мес.</span>
            </p>
            <input
              className="form-control-range"
              id="formControlRange"
              type="range"
              min="1"
              max="36"
              step="1"
              name="input"
              onInput={this.setTimeInvest}
            />
            <div >
              <p className="mt-5">
                <input
                  name="rate"
                  type="radio"
                  id="conservativeRate"
                  defaultChecked

                  onChange={this.setInvestRate}
                />
                Консервативный
              </p>
              <p>
                <input name="rate" type="radio" id="balancedRate"
                onChange={this.setInvestRate} />
                Сбалансированный
              </p>
              <p>
                <input name="rate" type="radio" id="riskRate"
                onChange={this.setInvestRate}/>
                Рискованынй
              </p>
            </div>
          </div>
          <div className="col-10 col-sm-7 border mt-sm-2 mb-sm-2 path">
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
