import React from 'react';
import OpenAccount from '../OpenAccount';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='signup_main_cont container'>
            <div className='head-container'>
                <h1 className='signup-h1'>Open a free demat and trading account online</h1>
                <p className='signup_hero_para'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>

            <div className='signup-section row'>
                <div className='col-6 signup-img left-signup-sec'>
                    <img src='mediaimages/sognup_page1img.svg' alt="Signup Illustration" className='signup-hero-img' />
                </div>
                  <div className='col-5 right-signup-sec'>
                 <Link class="loginButton " aria-current="page" to='/Login'>
                  Login
                </Link>

             <Link class="signUpButton" aria-current="page" to='/SignUpMain'>
                 Signup
                </Link>
                </div>
                 </div>

                {/* <div className='col-5 right-signup-sec'>
                    <form className="signup-form" noValidate>
                        <h2 className="form-title">Sign Up</h2>
                        <p className='text-secondary mb-2'>Or track your existing application</p>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Minimum 6 characters"
                                minLength={6}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-submit">Sign Up</button>
                    </form>
                </div> */} 

            <div className='investment-options-section'>
                <h3 className='inv-opt-p fs-3'>Investment options with Zerodha demat account</h3>

                <div className='invs-box'>
                    <div className='row inves-row'>
                        <div className='col-5 inves-cols me-5'>
                            <img src='mediaimages\signup_img2.svg' className='inves-img'/>
                            <div className='inves-box-right-para'>
                                <p className='inves-para1'>Stocks</p>
                                <p className='inves-para2'>Invest in all exchange-listed securities</p>
                            </div>
                        </div>
                        <div className='col-5 inves-cols'>
                            <img src='mediaimages\signup_img3.svg' className='inves-img'/>
                            <div className='inves-box-right-para'>
                                <p className='inves-para1'>Mutual funds</p>
                                <p className='inves-para2'>Invest in commission-free direct mutual funds</p>
                            </div>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='col-5 inves-cols me-5'>
                            <img src='mediaimages\signup_img4.svg' className='inves-img'/>
                            <div className='inves-box-right-para'>
                                <p className='inves-para1'>IPO</p>
                                <p className='inves-para2'>Apply to the latest IPOs instantly via UPI</p>
                            </div>
                        </div>
                        <div className='col-5 inves-cols'>
                            <img src='mediaimages\signup_img8.svg' className='inves-img'/>
                            <div className='inves-box-right-para'>
                                <p className='inves-para1'>Futures & options</p>
                                <p className='inves-para2'>Hedge and mitigate market risk through simplified F&O trading</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='inves-button-div'>
                    <button>Explore Investments</button>
                </div>
            </div>

            <div className='unbeatable_price_box'>
                <div className='row'>
                     <div className='col-5 me-5'>
                        <img src='mediaimages\signup_img7.svg' className='ub-pr-img'/>
                        <h4 className='mt-5'>Benefits of opening a Zerodha demat account</h4>
                     </div>

                     <div className='col-5 ms-5 ub-pr-right'>
                        <h5 className='mt-5'>Unbeatable pricing</h5>
                        <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>

                        <h5>Best investing experience</h5>
                        <p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>

                        <h5>No spam or gimmicks</h5>
                        <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>

                          <h5>The Zerodha universe</h5>
                        <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                     </div>
                </div>
            </div>
                <OpenAccount/>
        </div>
    );
}

export default Signup;
