import React, { Component } from "react";
import { connect } from "react-redux";
import "./Diagram.scss";

class Diagram extends Component {
  render() {
    return (
      <>
        <div className="row main align-items-end justify-content-around">
          <div className=" col-5 col-md-4 border" id="bank">
            <div className="row">
              <div className="col-12 text text-center">
                <p className="mb-0 rate"> + 12 0000</p>
                <p className="mb-0 underRate"> 6,5% годовых</p>
              </div>
            </div>
          </div>
          <div className=" col-5 col-md-4 border" id="firm">
            <div className="row">
              <div className="col-12 text text-center">
                <p className="mb-0 rate"> + 12 0000</p>
                <p className="mb-0 underRate"> 6,5% годовых</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-end justify-content-around lables">
          <div className="lable col-5 col-md-4 text-center">Депозит</div>
          <div className="lable col-5 col-md-4 text-center">Город денег</div>
        </div>
        <div className="row">
          <div className = "col-12 text-center pt-4">
            <button type="button" className="btn btn-danger" id = "investButton"
            style = {{borderRadius: "20px"}}>
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
