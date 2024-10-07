import React from 'react';
import "./Hero.css";
import Cookies from 'js-cookie';


function Hero({ isLogin }) {
    const checkLoginStatus = () => {
        const token = Cookies.get('token'); // Get token from cookies
        return !!token; // Return true if token exists
      };
    
      // Check login status initially
      const islogin = checkLoginStatus();    
    return (
        <div className='container p-5'>
            <div className='row justify-content-center text-center'>
                <div className='col-lg-11 col-md-8 col-sm-10 col-12'>
                    <img 
                        src="media/images/homeHero.png" 
                        alt="description of image" 
                        className='img-fluid mb-4'
                    />
                    <h1 className='mt-4'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    {!islogin && (
                        <button 
                            type="button" 
                            className="mt-3 btn btn-primary" 
                            style={{ width: "80%", maxWidth: "200px" }}
                        >
                            Signup now
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hero;
