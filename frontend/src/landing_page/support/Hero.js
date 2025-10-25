import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid support-hero'>
            <div className=' container support-hero-1'>
                <p className='supp-heading'>Support Portal</p>
                <button className='supp-button'><i class="fa fa-bullseye" aria-hidden="true"></i> My tickets</button>
            </div>

            <div className='container search-cont'> 
                <div className='search-icon'><i class="fa fa-search" aria-hidden="true"></i></div>
            <input  className='search-inp' placeholder='Eg: how do i activate F&O...'></input></div>
        </div>
     );
}

export default Hero;