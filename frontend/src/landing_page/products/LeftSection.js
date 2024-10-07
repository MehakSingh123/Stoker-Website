import React from "react";
import "./LeftSection.css";

function LeftSection({
  imageURL,
  productName,
  productDesription, 
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
        <div className="col-12 col-md-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div style={{ cursor: "pointer", color: "blue" }}>
            <a href={tryDemo}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3 picture" style={{ cursor: "pointer" }}>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"  alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" className="appstore" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
