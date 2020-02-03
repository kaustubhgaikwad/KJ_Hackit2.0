import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Addcontract extends Component {
  state = {
    Rate: "",
    Quantity: ""
  };

  handleRateChange = e => {
    console.log(this.state.Rate);
    this.setState({ Rate: e.target.value });
  };

  handleQuanityChange = e => {
    console.log(this.state.Quantity);
    this.setState({ Quantity: e.target.value });
  };

  render() {
    return (
      <div id="wrapper">
        <div id="main">
          <form className="col-6 col-12-medium" method="post" action="#">
            <h3 className="m-3">Add proposal </h3>

            <div className="row gtr-uniform">
              <div className="col-12">
                <select name="demo-category" id="demo-category">
                  <option value="1">Buy</option>
                  <option value="2">Sell</option>
                </select>
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="number"
                  name="demo-name"
                  id="demo-name"
                  min="1"
                  placeholder="Quantity in kg"
                  value={this.state.Quantity}
                  onChange={this.handleQuantityChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="demo-name"
                  id="demo-name"
                  placeholder="Rate in kg "
                  value={this.state.Rate}
                  min="1"
                  onChange={this.handleRateChange}
                />
              </div>
              <div className="col-6 col-12-small">
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label for="demo-copy">Email me a copy</label>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input type="submit" value=" Submit " className="primary" />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Addcontract;
