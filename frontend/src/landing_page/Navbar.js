import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg nav_main_container">
      <div class="container nav-2main-conatiner">
        <Link class="navbar-brand" to="/">
          <img
            src="mediaimages\logo.svg"
            alt="logo"
            className="navbar_logo_svg"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to='/signup'>
                  Signup
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to='/about'>
                  About
                </Link>
              </li>

               <li class="nav-item">
                <Link class="nav-link " to='/product'>
                  Products
                </Link>
              </li>

               <li class="nav-item">
                <Link class="nav-link " to='/pricing'>
                  Pricing
                </Link>
              </li>

               <li class="nav-item">
                <Link class="nav-link " to='/support'>
                  Support
                </Link>
              </li>

              <li class="nav-item me-3">
                <Link class="nav-link" to='/'>
                  <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
                </Link>
              </li>

            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
