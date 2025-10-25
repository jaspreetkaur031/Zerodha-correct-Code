import React from 'react';

function Brokerage() {
    return ( 
       <div className='container broke-container'>
        <h2 className='broke-h2 '>Charges explained</h2>

        <div className='row broke-row'>
            <div className='col-6 broke-left-col '>
                  
                <div className='broke-left div1'>
               <p className='broke-heading'>Securities/Commodities transaction tax</p>

               <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                </div>

                <div className='broke-left div2'>
               <p className='broke-heading'>Transaction/Turnover Charges</p>

               <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
               
                <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

                <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

                <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>

                <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                </div>

                <div className='broke-left div3'>
               <p className='broke-heading'>Call & trade</p>

               <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                </div>

                <div className='broke-left div4'>
               <p className='broke-heading'>Stamp charges</p>

               <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                </div>

                <div className='broke-left div5'>
               <p className='broke-heading'>NRI brokerage charges</p>

               <ul>
                <li>₹100 per order for futures and options.</li>
                <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
               </ul>

                </div>

              <div className='broke-left div6'>
               <p className='broke-heading'>Account with debit balance</p>

               <p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                </div>

                 <div className='broke-left div7'>
               <p className='broke-heading'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>

               <ul>
                <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                
               </ul>

                </div>

                 <div className='broke-left div8'>
               <p className='broke-heading'>Margin Trading Facility (MTF)</p>

               <ul>
                <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                
               </ul>

                </div>

            </div>

            <div className='col-6 broke-right-col'>
                <div className='broke-right rdiv1'>
                    <p className='broke-heading'>GST</p>
                    <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                </div>

                <div className='broke-right rdiv2'>
                    <p className='broke-heading'>SEBI Charges</p>
                    <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                </div>

                 <div className='broke-right rdiv3'>
                    <p className='broke-heading'>DP (Depository participant) charges</p>
                    <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                </div>

                <div className='broke-right rdiv4'>
                    <p className='broke-heading'>Pledging charges</p>
                    <p>₹30 + GST per pledge request per ISIN.</p>
                </div>

                <div className='broke-right rdiv5'>
                    <p className='broke-heading'>AMC (Account maintenance charges)</p>
                    <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href='#'>Click here</a></p>
                    <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href='#'>Click here</a></p>
                </div>

                <div className='broke-right rdiv6'>
                    <p className='broke-heading'>Corporate action order charges</p>
                    <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                </div>

                <div className='broke-right rdiv7'>
                    <p className='broke-heading'>Off-market transfer charges</p>
                    <p>₹25 per transaction.</p>
                </div>

                 <div className='broke-right rdiv8'>
                    <p className='broke-heading'>Physical CMR request</p>
                    <p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                </div>

                 <div className='broke-right rdiv9'>
                    <p className='broke-heading'>Payment gateway charges</p>
                    <p>₹9 + GST (Not levied on transfers done via UPI)</p>
                </div>

                 <div className='broke-right rdiv10'>
                    <p className='broke-heading'>Delayed Payment Charges</p>
                    <p>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href='#'>Learn more</a>.</p>
                </div>

                <div className='broke-right rdiv11'>
                    <p className='broke-heading'>Trading using 3-in-1 account with block functionality</p>
                    <ul>
                        <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                         <li>Intraday Brokerage: 0.05% per executed order.</li>
                    </ul>
                </div>



            </div>
        </div>

        <div className='broke-disclaimer'>
            <p className='broke-Dis-h'>Disclaimer</p>
            <p className='broke-Dis-p'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>

        {/* table */}

        <div className='container main-table-container ms-4'>
            <h2 className='fs-3'>Charges for account opening</h2>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th className='th-l'>Type of account</th>
                            <th><td>
                                 <span className='th-r'>Charges</span>
                            </td>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='td-l'>Online account</td>
                            <td>
                                <span className='free-tag td-r'>free</span>
                            </td>
                        </tr>

                        <tr>
                            <td className='td-l'>Offline account</td>
                            <td>
                                <span className='free-tag td-r'>free</span>
                            </td>
                        </tr>

                        <tr>
                            <td className='td-l'>NRI account (offline only)</td>
                            <td>
                                 <span className='td-r'>₹ 500</span>
                            </td>
                        </tr>

                        <tr>
                            <td className='td-l'>Partnership, LLP, HUF, or Corporate accounts(offline only)</td>
                           <td>
                                 <span className='td-r'>₹ 500</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       </div>
     );
}

export default Brokerage;