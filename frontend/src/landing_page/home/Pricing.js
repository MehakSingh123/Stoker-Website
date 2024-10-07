import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="container ">
      <div className="row price justify-content-center">
        <div className="col-md-5 col-sm-10 m-5">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className=" col-md-6 col-sm-10 mb-5 mt-5">
          <div className="row text-center mx-auto" style={{ maxWidth: "100%" }}>
            <div className=" price2 col-10 col-lg-6 p-4 border">
              <h1 className="mb-4 mt-2">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-10 col-lg-6 p-4 border">
              <h1 className="mb-4 mt-2">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
