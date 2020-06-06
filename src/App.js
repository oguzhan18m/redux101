import React, { Component } from "react";
import FrozenDept from "./components/FrozenDept";
import MeatDept from "./components/MeatDept";
import ProduceDept from "./components/ProduceDept";

export default class App extends Component {
  render() {
    return (
      <div>
        <FrozenDept />
        <MeatDept />
        <ProduceDept />
      </div>
    );
  }
}
