import React from 'react';
import '../../index.css';

function Stats() {
    return ( 
        <div className='container p-2'>
            <div className='row stats-1st-row p-2'>
                <div className='col-6 p-2 stats-left-side'>
                    <h1 className='stats-heading fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='stats-heading fs-4'>Customer-first always</h2>
                    <p className='stats-para text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='stats-heading fs-4'>No spam or gimmicks</h2>
                    <p className='stats-para text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h2 className='stats-heading fs-4' >The Zerodha universe</h2>
                    <p className='stats-para text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='stats-heading fs-4'>Do better with money</h2>
                    <p className='stats-para text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>

                <div className='col-6 p-1'>
                    <img src='mediaimages\ecosystem.png' alt='ecosystem-image' className='stats-ecosystem-image' />

                    <div className='text-center'>
                        <a href=''className='mx-5 stats-links'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        <a  className="stats-links" href=''>Try Kite demo <i class="fa fa-long-arrow-right stats-links" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

            <div className='row mb-5'>
                <img className='states-image-2' src='mediaimages\pressLogos.png' />
            </div>
        </div>
     );
}

export default Stats;