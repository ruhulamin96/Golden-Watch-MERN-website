import React from 'react'
import about from '../../../images/about.jpg'

import './AboutUs.css'
function AboutUs() {
  
    return (
        <div>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6"  >
                        <h3 style={{color:'#C40D2E', fontWeight:"bold", letterSpacing:"5px"}}>
                        HIGHEST AUCTION PRICE FOR SPEEDMASTER 
                        </h3>
                        <p>Discover how a rare Speedmaster with a tropical dial produced a bidding storm at Phillips Auction House in Geneva, which resulted in a new world record.</p>
                        <button className="btn-about">READ MORE <i class="fas fa-long-arrow-alt-right ms-1"></i></button>
                    </div>
                    <div className="col-md-6 img-up-down">
                       <img className="w-100 " src={about} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
