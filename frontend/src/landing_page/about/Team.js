import React from 'react';

function Team() {
    return ( 
         <div className='container people-container mb-5'>
            <div className='row'>
                <h1 className='about-team-h1 text-center mt-4'>
                   People
                </h1>
            </div>

            <div className='row about-team-section ms-5'>
                <div className='col-3 left-team-image'>
                  <img className='nitin-image' src='mediaimages\nithinKamath.jpg' alt='nithinKamath' />
                  <h4 className='mt-4 founder-name'>Nitin Kamath</h4>
                  <h5 className='mt-3 text-muted team-position'>Founder, CEO</h5>
                </div>

                <div className='col-7 team-intro'>
                    <p className=''>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p className=''>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>
<p>Connect on <a href='#'> Homepage</a> / <a href='#'>TradingQnA </a> / <a href='#'>Twitter</a> </p>
                </div>

            </div>
        </div>
     );
}

export default Team;