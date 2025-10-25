import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-2'>
                <div className='col-4 p-3'>
                    <h1 className='mb-3 mt-3'>Unbeatable pricing</h1>
                    <p className='mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''className='pricing-link1'>See pricing<i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-5 border'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-5 border'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                            <p>Intraday and F&Q</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;