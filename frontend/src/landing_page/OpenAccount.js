import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
         <div className='container p-4 openAccount-container'>
        <div className='row text-center'>
            <div className='col'>
                <h1 className='openAccount-h1-heading-1'>Open a Zerodha account</h1>
                <p className='openAccount-para-1'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link className='mb-5 openAccount-button-1' aria-current="page" to='/SignUpMain'> Sign up for free</Link>
            </div>
        </div>
        
      </div>
     );
}

export default OpenAccount;