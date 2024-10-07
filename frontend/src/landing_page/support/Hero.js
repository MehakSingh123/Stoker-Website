import React from "react";
import "./Support.css"; // Import your custom CSS

function CreateTicket() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4 className="mt-2 distance">Support Portal</h4>
        <a href="" className="mt-3 ticket distance">Track Tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <p className="para ms-5">Search for an answer or browse help topics to create a ticket</p>
          <div className="input-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Eg. how do I activate F&O, why is my order getting rejected ..." 
              aria-label="Search"
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
          <div className="whole-link">
            <p className="sizetag">
              <a href="">Track account opening</a>
            </p>
            <p className="sizetag">
              <a href="">Track segment activation</a>
            </p>
            <p className="sizetag">
              <a href="">Intraday margins</a>
            </p>
            <br/>
            <p className="sizetag">
              <a href="">Kite user manual</a>
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12" id="feature-id">
          <h4 className="fs-4">Featured</h4>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <br></br>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
