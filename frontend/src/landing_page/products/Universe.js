import React from "react";
import './Universe.css'; // Import the CSS file

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="img-fluid small-screen-img" alt="Smallcase" />
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" className="img-fluid small-screen-img" alt="Streak" style={{ width: "8rem" }} />
          <p className="text-small text-muted mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" className="img-fluid small-screen-img" alt="Sensibull" style={{ width: "9.5rem" }} />
          <p className="text-small text-muted mt-3">Options trading platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" className="img-fluid small-screen-img" alt="Zerodha Fundhouse" style={{ width: "12rem" }} />
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" className="img-fluid small-screen-img" alt="GoldenPi" style={{ width: "10.5rem" }} />
          <p className="text-small text-muted mt-3">Bonds trading platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" className="img-fluid small-screen-img" alt="Ditto" style={{ width: "7.5rem" }} />
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        <div className="col-12 mt-3">
          <button className="btn btn-primary fs-5 mb-5" style={{ width: "12rem", margin: "0 auto" }}>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
