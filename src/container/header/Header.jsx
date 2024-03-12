import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <div className="header-container container">
                <div className="main_header">
                    <h1>Own your audience.</h1>
                    <h2>So you don't lose them.</h2>
                </div>
                <div className="header_button">
                    <div className="header_text">
                        <h1>Turn your audience into email and
                            text message subscribers.</h1>
                    </div>
                    <div className="header_button2">
                        <div className="start_btn">
                            <a href="#"> Get Started Now</a>
                        </div>
                        <div className="start_btn">
                            <a href="#">View A Demo</a>
                        </div>
                    </div>
                    <div className="header_count">
                        <div className="dot">
                                <div className="dot2"></div>
                        </div>
                        <div className="header_count2">
                            <span>1000+</span>
                            <p>creators have already started</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header