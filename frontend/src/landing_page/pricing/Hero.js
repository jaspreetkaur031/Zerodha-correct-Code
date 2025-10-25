import React from "react";

function Hero() {
  return (
    <div className="container text-center pricing-hero-section">
      <h1 className="pricing-h1 mb-2">Charges</h1>
      <p className="pricing-para">List of all charges and taxes</p>

      <div className="row pricing-row">
        <div className="col-4">
          <img src="mediaimages\pricing0.svg" className="pricing0-img"/>
          <h1 className="pricing0-h1">Free equity delivery</h1>
          <p className="pricing0-para">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="mediaimages\intradayTrades.svg" className="pricing20-img" />
          <h1 className="pricing0-h1">Intraday and F&O trades</h1>
          <p className="pricing0-para">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="mediaimages\pricing0.svg" className="pricing0-img" />
          <h1 className="pricing0-h1">Free direct MF</h1>
          <p className="pricing0-para">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
