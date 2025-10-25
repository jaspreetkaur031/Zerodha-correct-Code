import React from 'react';

function Education() {
    return ( 
       <div className='container mt-5 mb-5 edu-main-container'>
        <div className='row'>
            <div className='col-5'>
                <img className='p-1 edu-image' src='mediaimages\education.svg' />
            </div>

              <div className='col-6 edu-col-2'>
                 <h1 className='fs-2 mb-4'>Free and open market education</h1>
                 <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                 <a href='#' className='VT-links'>Varsity <i class="fa fa-long-arrow-right stats-links" aria-hidden="true"></i></a>

                 <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                  <a href='#' className='VT-links'>TradingQ&A <i class="fa fa-long-arrow-right stats-links" aria-hidden="true"></i></a>

              </div>
        </div>
       </div>
     );
}

export default Education ;