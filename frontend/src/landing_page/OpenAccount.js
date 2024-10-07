import React from 'react';
import Cookies from 'js-cookie';
function OpenAccount({isLogin}) {
    const checkLoginStatus = () => {
        const token = Cookies.get('token'); // Get token from cookies
        return !!token; // Return true if token exists
      };
    
      // Check login status initially
      const islogin = checkLoginStatus();
    return ( 
        <div className='container p-5'>
            <div className='row text-center justify-content-center '>
              <h1 className='mt-5'>Open a Zerodha account</h1>
              <p className='mt-3'> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.</p>
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
     );
}

export default OpenAccount;