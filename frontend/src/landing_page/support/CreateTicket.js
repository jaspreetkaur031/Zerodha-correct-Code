import React from 'react';

function CreateTicket() {
    return ( 
       <div className='container tickets-main-container mt-5'>
        <div className='container tickets-cont-1'>
            <div className='box'>
               
                <div className='dropdown d1'>
                  <div className='plus-icon-div'><i class="fa fa-plus plus-icon" aria-hidden="true"></i></div>
                    <details>
                        <summary>Account Opening</summary>
                        <ul>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Resident individual</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Minor</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Non Resident Indian (NRI)</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Company, partnership, HUF and LLP</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Glossy</li></a>
                        </ul>
                    </details>
                </div>

                <div className='dropdown d2'>
                  <div className='user-icon-div'><i class="fa fa-user-o user-icon" aria-hidden="true"></i></div>
                    <details>
                        <summary>Your Zerodha Account</summary>
                        <ul>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Your Profile</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Account modification</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Client Master Report (CMR) and Depository participant (DP)</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Company, partnership, HUF and LLP</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Glossy</li></a>
                        </ul>
                    </details>
                </div>

                <div className='dropdown d3'>
                  <div className='chart-icon-div'><i class="fa fa-bar-chart chart-icon" aria-hidden="true"></i></div>
                    <details>
                        <summary>Kite</summary>
                        <ul>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>IPO</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Trading FAQs</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Margin Trading Facility (MTF) and Margins</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Charts and orders</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Alerts and Nudges</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>General</li></a>
                        </ul>
                    </details>
                </div>

                 <div className='dropdown d4'>
                  <div className='inr-icon-div'><i class="fa fa-inr inr-icon" aria-hidden="true"></i></div>
                    <details>
                        <summary>Funds</summary>
                        <ul>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Add money</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Withdraw money</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Add bank accounts</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>eMandates</li></a>
                        
                        </ul>
                    </details>
                </div>

                 <div className='dropdown d5'>
                  <div className='console-icon-div'><i class="fa fa-search-minus console-icon" aria-hidden="true"></i></div>
                    <details>
                        <summary>Console</summary>
                        <ul>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Portfolio</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Corporate actions</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Funds statement</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Reports</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Profile</li></a>
                            <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Segments</li></a>

                        
                        </ul>
                    </details>
                </div>

            </div>
        </div>

        <div className='side-cont-2'>
            <div className='tickets-link-cont-1'>
                <ul>
                    <a href='#'><li className='support-dropdown-li'>Exclusion of F&O contracts on 8 securities from August 29, 2025</li></a>

                    <a href='#'><li className='support-dropdown-li'>Revision in expiry day of Index and Stock derivatives contracts</li></a>
                </ul>
            </div>

            <div className='tickets-quick-link-cont-2'>
                <div className='quick-links'>
                     <p className='ql-heading'>Quick links</p>
                     <ol>
                        <a href='#' className='support-dropdown-li '><li className='support-dropdown-li'>Track account opening</li></a>
                        <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Track segment activation</li></a>
                        <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Intraday Margins</li></a>
                        <a href='#' className='support-dropdown-li'><li className='support-dropdown-li'>Kite user manual</li></a>

                     </ol>
                </div>
            </div>

        </div>
       
       </div>
     );
}

export default CreateTicket;