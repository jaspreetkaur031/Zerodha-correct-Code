import React from 'react';
import { Link } from "react-router-dom";
import '../../index.css';

function Hero() {
    return ( 
      <div className='container p-5 mb-5'>
          <div className='Login-Signup-Container '>

                <Link class="loginButton " aria-current="page" to='/Login'>
                  Login
                </Link>

             <Link class="signUpButton " aria-current="page" to='/SignUpMain'>
                 Signup
                </Link>

          </div>
        <div className='row text-center'>
            <div className='col'>
                <img src='mediaimages/homeHero.png' alt='Hero-Image' className='mb-4 home-hero-image-1'/>
                <h1 className='mt-5 home-hero-h1-heading-1'>Invest in everything</h1>
                <p className='hero-para-1'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link className='mb-5 home-hero-button-1' aria-current="page" to='/SignUpMain'> Sign up for free</Link>
            </div>
        </div>
        
      </div>
     );
}

export default Hero;
