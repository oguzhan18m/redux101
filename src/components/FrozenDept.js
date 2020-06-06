import React, { Component } from "react";
import { connect } from "react-redux";
import updateFrozen from "../actions/frozenInvUpdate";
import { bindActionCreators } from "redux";

class FrozenDept extends Component {
  increment = (qChange, i) => {
    this.props.updateFrozen(qChange, i);
  };

  render() {
    console.log(this.props.frozenData);
    const frozenInventory = this.props.frozenData.map((item, i) => {
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
          ></input>
          <input
            type="button"
            onClick={() => {
              this.increment(-1, i);
            }}
            value="-"
          ></input>
        </div>
      );
    });

    return (
      <div>
        <h1>Frozen Products</h1>
        <ul>{frozenInventory}</ul>
      </div>
    );
  }
}

console.log(connect);

function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateFrozen: updateFrozen,
    },
    dispatch
  );
}

export default connect(mapDispatchToProps, mapStateToProps)(FrozenDept);
