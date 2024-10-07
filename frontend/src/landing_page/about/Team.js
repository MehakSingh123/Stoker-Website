import React from "react";
// import "Team.css"

function Team() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row text-muted" style={{ lineHeight: "2", fontSize: "1.1em" }}>
        <div className="col-md-6 p-5 col-sm-12 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            className=" rounded-circle"
            style={{ width: "50%" }}
            alt="Nithin Kamath"
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-md-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p style={{ textDecoration: "none" }}>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
