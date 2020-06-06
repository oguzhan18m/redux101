import React, { Component } from "react";
import { connect } from "react-redux";
import updateProduce from "../actions/produceInvUpdate";
import { bindActionCreators } from "redux";

class ProduceDept extends Component {
  increment = (qChange, i) => {
    this.props.updateProduce(qChange, i);
  };
  render() {
    console.log(this.props.produceData);
    const produceInventory = this.props.produceData.map((item, i) => {
      return (
        <div key={i}>
          <li>
            <strong>{item.food}</strong> {item.quantity}
          </li>
          <input
            type="button"
            onClick={() => {
              this.increment(1, i);
            }}
            value="+"
          />
          <input
            type="button"
            onClick={() => {
              this.increment(-1, i);
            }}
            value="-"
          />
        </div>
      );
    });
    return (
      <div>
        <h1>Produce Products</h1>
        <ul>{produceInventory}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    produceData: state.produce,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateProduce: updateProduce,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);
