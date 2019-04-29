import React, { Component } from "react";
import { connect } from "react-redux";
import "./Diagram.scss";
import rubleIcon from "../icons/ruble.png";
import questionMark from "../icons/mark.png";
import {setSpaceBetweenNumber} from "../App.js";

class Diagram extends Component {

  // methot to get profit when rate is 6,5%
  getProfitFor6Rate = (invest, time) => {
    invest = parseInt(invest);
    time = parseInt(time);
    let profit = invest * 1000 * Math.pow(1 + 6.5 / 100 / 12, time);
    profit = profit - invest * 1000;
    return Math.floor(profit);
  };

  computeProfit = (invest, rate, time) => {
    invest = parseInt(invest);
    rate = parseInt(rate);
    time = parseInt(time);
    let profit = invest * 1000 * Math.pow(1 + rate / 100 / 12, time);
    profit = profit - invest * 1000;
    return Math.floor(profit);
  };

  render() {
    let profit = this.computeProfit(
      this.props.store.invest,
      this.props.store.interestRate,
      this.props.store.time
    );

    // computing calumn heigth --------
    let calumnHeight =
      (profit /
        this.getProfitFor6Rate(
          this.props.store.invest,
          this.props.store.time
        )) *
      110;

    if (this.props.store.interestRate === 18) calumnHeight *= 0.7;
    else if (this.props.store.interestRate === 25) calumnHeight *= 0.5;
//-------------------
    return (
      <>

        <div className="row main align-items-end justify-content-around">
          <div
            className=" col-5 col-md-4 "
            id="bank"
            style={{ height: "110px" }}
          >
            <div className="row">
              <div className="col-12 text text-center">
                <p className="mb-0 rate">
                  {" "}
                  +{" "}
                  {setSpaceBetweenNumber(
                    this.getProfitFor6Rate(
                      this.props.store.invest,
                      this.props.store.time
                    )
                  )}
                  <img src={rubleIcon} alt="" className="ml-2 mb-1" />
                </p>
                <p className="mb-0 underRate"> 6,5% годовых</p>
              </div>
              <div className="col-12 column wrapper row justify-content-center">
                <div className="bar two" />
              </div>
            </div>
          </div>
          <div
            className=" col-5 col-md-4 "
            id="firm"
            style={{ height: calumnHeight + "px" }}
          >
            <div className="row">
              <div className="col-12 text text-center">
                <p className="mb-0 rate">
                  {" "}
                  + {setSpaceBetweenNumber(profit)}
                  <img src={rubleIcon} className="ml-2 mb-1" alt="" />
                </p>
                <p className="mb-0 underRate">
                  {" "}
                  {this.props.store.interestRate}% годовых
                </p>
              </div>
              <div
                className="col-12 column wrapper row justify-content-center"
                style={{
                  height: calumnHeight - 50 + "px"
                }}
              >
                <div className="bar one" />
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-end justify-content-around lables">
          <div className="col-5 col-md-4 text-center organisation">
            Депозит{" "}
            <img
              src={questionMark}
              className="ml-2"
              style={{
                width: "22px",
                height: "22px",
                marginBottom: "3px",
                cursor: "pointer"
              }}
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 text-center organisation">
            Город денег{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center pt-4 pb-3">
            <button
              type="button"
              className="btn btn-danger"
              id="investButton"
              style={{ borderRadius: "20px" }}
            >
              Инвестировать
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({})
)(Diagram);
