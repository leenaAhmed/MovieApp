import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer
          className="mt-4 pt-5"
          style={{
            background:
              "linear-gradient(to right bottom, #a9c9ff 0%, #ffbbec 100%)",
            color: " #9ab7eb"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-4 text-light">
                <p> Get Touch</p>
                <p> hello there </p>
              </div>
              <div className="col-4">
                <button className="btn header__btn"> contact me</button>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
