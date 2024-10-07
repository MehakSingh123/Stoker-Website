import React from "react";


function RightSection({ imageURL, productName,  productDesription, learnMore }) { // corrected typo
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-5 mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p>{ productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
