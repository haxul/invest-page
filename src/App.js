import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="container" style = {{
        marginTop: "9%",
        marginBottom: "10%"
      }} >
        <div className="row justify-content-center">
          <div className="col-11 col-sm-5 border path">
            {" "}
            <h4 className="">Калькулятор доходности </h4>
            <p className="">Сумма инвестрирования</p>
            <p className="">
              120 000 <span> P</span>
            </p>
            <input
              type="range"
              className="form-control-range"
              id="formControlRange"
            />
            <p className="">Сроки</p>
            <p className="">
              24 <span> мес.</span>
            </p>
            <input
              type="range"
              className="form-control-range"
              id="formControlRange"
            />
            <p className = "mt-5"><input name = "rate" type="radio"/>Консервативный</p>
            <p><input name = "rate"  type="radio" />Сбалансированный</p>
            <p><input  name = "rate" type="radio"  />Рискованынй</p>

          </div>
          <div className="col-10 col-sm-7 border mt-sm-2 mb-sm-2 path">2 of 2</div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({})
)(App);
