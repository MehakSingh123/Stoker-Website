import React from 'react';
import "./Awards.css";

function Awards() {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 p-5">
                    <img src="media/images/largestBroker.svg" className="img-fluid normal-img" alt="Largest Broker" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 p-5 ">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='media-image mt-3'>
                    <img src="media/images/pressLogos.png"  alt="Press Logos" />
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Awards;
