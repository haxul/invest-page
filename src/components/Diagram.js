import React, { Component } from "react";
import { connect } from "react-redux";
import "./Diagram.scss";

class Diagram extends Component {

  setSpaces = number => {
    number += "";
    number = number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    return number;
  };

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
     let profit = invest * 1000 * Math.pow((1 + ((rate / 100) / 12)), time);
     profit = profit - invest * 1000;
     return Math.floor(profit);
   };

  render() {

    let sum  = this.computeProfit(this.props.store.invest, this.props.store.interestRate, this.props.store.time);
    let calumnHeight = (sum/this.getProfitFor6Rate(
      this.props.store.invest,
      this.props.store.time
    ))*100;

    if (this.props.store.interestRate === 18) calumnHeight *= 0.7;
    else if (this.props.store.interestRate === 25) calumnHeight *= 0.5;

    return (
      <>
        <div className="row main align-items-end justify-content-around">
          <div className=" col-5 col-md-4 border" id="bank" style = {{height: "100px"}}>
            <div className="row">
              <div className="col-12 text text-center">
                <p className="mb-0 rate">
                  {" "}
                  +{" "}
                  {this.setSpaces(
                    this.getProfitFor6Rate(
                      this.props.store.invest,
                      this.props.store.time
                    )
                  )}
                </p>
                <p className="mb-0 underRate"> 6,5% годовых</p>
              </div>
            </div>
          </div>
          <div className=" col-5 col-md-4 border" id="firm" style = {{height: calumnHeight+ "px"}}>
            <div className="row">
              <div className="col-12 text text-center">
                <p className="mb-0 rate">
                  {" "}
                  + {this.setSpaces(sum)}
                </p>
                <p className="mb-0 underRate">
                  {" "}
                  {this.props.store.interestRate}% годовых
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-end justify-content-around lables">
          <div className="lable col-5 col-md-4 text-center organisation">Депозит</div>
          <div className="lable col-5 col-md-4 text-center organisation">Город денег</div>
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
  dispatch => ({

  })
)(Diagram);
