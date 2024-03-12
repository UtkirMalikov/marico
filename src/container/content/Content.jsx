import "./Content.css"
import Happy from "../logo/Happy.png"
import Party from "../logo/Party.png"
import Smile from "../logo/Smile.png"

function Content() {
  return (
    <div className='content'>
      <div className="content-container container">
        <div className="content_marico">
          <h1 style={{"fontSize":"4vw"}}>Why Creators Love Marico</h1>
          <div className="content_redused">
            <div className="redused_anxiety">
              <span>
              <img src={Smile} style={{"marginRight":"8px", "fontSize":"10px"}} />
                <h3>Reduced Anxiety</h3>
              </span>
              <p>Never worry about losing your audience.</p>
            </div>
            <div className="redused_anxiety">
              <span>
              <img src={Happy}alt="" style={{"marginRight":"8px"}} />
                <h3>Lower Workload</h3>
              </span>
              <p>Never worry about losing your audience.</p>
            </div>
            <div className="redused_anxiety">
              <span>
              <img src={Party} style={{"marginRight":"8px"}} alt="" />
                <h3>More Time</h3>
              </span>
              <p>Never worry about losing your audience.</p>
            </div>
        
            
          </div>
        </div>
        <div className="your_content">
          <div className="your_content1">
            <h4>STEP 1</h4>
            <h1 style={{"fontSize":"4vw"}}>Connect Your Content</h1>
            <p>Bring all of your content together and get a Homepage that
              automatically updates whenever you create anywhere online.</p>
          </div>
          <div className="content_button">View Avaliable Sources</div>
        </div>
      </div>
    </div>
  )
}

export default Content