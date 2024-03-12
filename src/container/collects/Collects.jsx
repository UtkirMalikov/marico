import React from 'react'
import "./Collects.css"
import mobile from "../logo/Mobile.png"
function Collects() {
    return (
        <div className='collects'>
            <div className="collects-container container">
                <div className="step_2">
                    <h3>STEP 2 </h3>
                    <h1>Share Your Homepage</h1>
                    <p>Share your Wavium homepage link with your followers, and
                        we'll handle the rest.</p>
                </div>
                <div className="One_link_Collects">
                    <div className="base1">
                        <div className="base1__text">
                            <h3>One Link</h3>
                            <h1>ALL You Create.</h1>
                            <h2>One Link</h2>
                        </div>
                        <div className="image">
                            <img src={mobile} alt="" />
                        </div>
                    </div>
                    <div className="base2">
                        <div className="base_text">
                            <p>Collect Subscribers</p>
                            <div className="bace_text2">
                                <h1>Emails. Phone #s.</h1>
                                <h2>All Yours.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <button>Get Started </button>
            </div>
        </div>
    )
}

export default Collects