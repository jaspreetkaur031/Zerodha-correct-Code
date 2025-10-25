import React from 'react';

function NotFound() {
    return ( 
         <div className='container p-4 openAccount-container'>
        <div className='row text-center'>
            <div className='col'>
                <h1 className='openAccount-h1-heading-1'>404 Not Found</h1>
                <p className='openAccount-para-1'>Sorry,the page you are looking for does not exist.</p>

               {/* <Link to="/">
                <button className='p-2 mb-5 openAccount-button-1'> Go Home</button>
               </Link> */}
            </div>
        </div>
        
      </div>
     );
}

export default NotFound;