import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";
import Diagram from "./components/Diagram.js";

class App extends Component {
  setInvest = (e) => {
    this.props.dSetInvest(e.target.value);
  }
  render() {
    return (
      <div className="container" style = {{
        marginTop: "9%",
        marginBottom: "10%"
      }} >
        <div className="row justify-content-center">
          <div className="col-11 col-sm-5 border path pt-3 pb-3">
            {" "}
            <h4 className="">Калькулятор доходности </h4>
            <p className="">Сумма инвестрирования</p>
            <p className="">
              <span>{this.props.store.invest}</span> <span> P</span>
            </p>
            <input
              type="range"
              className="form-control-range"
              id="formControlRange"
              max="5000000"
              min="0"
              step="1000"
              onInput = {this.setInvest}
            />
            <p className="">Сроки</p>
            <p className="">
              24 <span> мес.</span>
            </p>
            <input
            className="form-control-range"
            id="formControlRange"
              type="range"
              min = "0"
              max = "60"
              step = "1"
              name = "input"
            />
            <p className = "mt-5"><input name = "rate" type="radio"/>Консервативный</p>
            <p><input name = "rate"  type="radio" />Сбалансированный</p>
            <p><input  name = "rate" type="radio"  />Рискованынй</p>

          </div>
          <div className="col-10 col-sm-7 border mt-sm-2 mb-sm-2 path">
            <Diagram/>
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
    dSetInvest: (num) => {
      dispatch({type: "SET_INVEST", payload: num});
    }
  })
)(App);
