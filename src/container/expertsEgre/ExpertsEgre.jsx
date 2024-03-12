import React from 'react'
import "./ExpertsEgre.css"
import Agree from "../logo/Agree.png"
import Audience from "../logo/Audience.png"
function ExpertsEgre() {
  return (
    <div className='agre'>
        <div className="agre-container">
            <div className="agre1">
                <img src={Agree} alt="" />
            </div>
            <div className="agre2">
                <img style={{"maxWidth":"95%"}} src={Audience} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ExpertsEgre