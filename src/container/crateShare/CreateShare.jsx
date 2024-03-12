// import "./HomePage.css"
import "./CreateShare.css"
import screen from "../logo/Screen1.png"
function CreateShare() {
    return (
        <div className="homePage">
            <div className="your_content">
                <h4>STEP 1</h4>
                <h1>Connect Your Content</h1>
                <p>Bring all of your content together and get a Homepage that
                    automatically updates whenever you create anywhere online.</p>
            </div>
            <div className="homePage-container container">
                <div className="yourHomePage">
                    <div className="text">
                        <div className="text1">
                            <h3>Create & Share</h3>
                            <h1>Reach Your </h1>
                            <h2>Audience<span>Directly.</span></h2>

                        </div>
                        <div className="text2">
                            <div className="textura">
                                <div className="textura1">
                                    <div className="raqam">1</div>
                                    <p>Bring all of your content together into one homepage.</p>
                                </div>
                                <div className="textura1">
                                    <div className="raqam">2</div>
                                    <p>Your page automatically updates whenever you create.</p>
                                </div>
                            </div>
                            <div className="homePage_button">
                                <button>Get Started Now</button>
                                <button>View A Demo</button>
                            </div>
                        </div>
                    </div>
                    <div className="scren">
                        <img style={{ 'maxWidth': "100%" }} src={screen} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateShare