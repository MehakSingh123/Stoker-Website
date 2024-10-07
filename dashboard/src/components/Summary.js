import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>

          <div className="second">
            <p>
              <span>Margins used:0</span>
             <span>  Opening balance:3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>

          <div className="second">
            <p>
              <span>Current Value:31.43k</span>
              <span> Investment:29.88k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
