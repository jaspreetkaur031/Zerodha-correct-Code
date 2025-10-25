import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container text-center">
      {" "}
      <p className="text-center uni-upper-text">
        Want to know more about our technology stack? Check out the{" "}
        <a href="#" className="uni-upper-a">
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <div className="row text-center uni-row">
        <h1 className="text-center uni-h1">The Zerodha Universe</h1>
        <p className="text-center uni-head-p">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row uni-logos-row-cont">
          <div className="col-4 uni-col uni-col-1">
            <img
              src="mediaimages\zerodhaFundhouse.png"
              className="img-1 uni-img"
            />
            <p className="text-small para-1 uni-para">
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
          </div>

          <div className="col-4 uni-col uni-col-2">
            <img
              src="mediaimages\sensibullLogo.svg"
              className="img-2 uni-img"
            />
            <p className="text-small para-2 uni-para">
              Options trading platform that lets you <br />
              You strategies, analyze positions, and examine
              <br /> data points like open interest, FII/DII, and more.
            </p>
          </div>

          <div className="col-4 uni-col uni-col-3 ">
            <img src="mediaimages\goldenpiLogo.png" className="img-3 uni-img" />
            <p className="text-small para-3 uni-para">
              Investment research platform <br /> that offers detailed insights
              on stocks, <br /> sectors, supply chains, and more.
            </p>
          </div>

          <div className="col-4 uni-col uni-col-4">
            <img src="mediaimages\streakLogo.png" className="img-4 uni-img" />
            <p className="text-small para-4 uni-para">
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </div>

          <div className="col-4 uni-col uni-col-5">
            <img
              src="mediaimages\smallcaseLogo.png"
              className="img-5 uni-img"
            />
            <p className="text-small para-5 uni-para">
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>

          <div className="col-4 uni-col uni-col-6">
            <img src="mediaimages\dittoLogo.png" className="img-6 uni-img" />
            <p className="text-small para-6 uni-para">
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </div>
        </div>
        <Link className='product-button' aria-current="page" to='/SignUpMain'> Sign up for free</Link>
      </div>
    </div>
  );
}

export default Universe;
