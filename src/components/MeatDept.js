import React, { Component } from "react";
import { connect } from "react-redux";
import updateMeat from "../actions/meatInvUpdate";
import { bindActionCreators } from "redux";

class MeatDept extends Component {
  increment = (qChange, i) => {
    this.props.updateMeat(qChange, i);
  };
  render() {
    console.log(this.props.meatData);
    const meatInventory = this.props.meatData.map((item, i) => {
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
        <h1>Meat Products</h1>
        <ul>{meatInventory}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    meatData: state.meat,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateMeat: updateMeat,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);
