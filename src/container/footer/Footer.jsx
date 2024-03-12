import "./Footer.css"
import logo from "../logo/logo.png"
import { useState } from "react"
function Footer() {
    const [collapse1, setCollapse] = useState("nav__menu1")
    const [togglrIcon, setToggleIcon] = useState("toggler__icon1")
    const onToggle = () => {
        collapse1 === 'nav__menu1'
            ? setCollapse('nav__menu1 nav__collapse1')
            : setCollapse('nav__menu1')

        togglrIcon === "toggler__icon1"
            ? setToggleIcon("toggler__icon1 toggle1")
            : setToggleIcon("toggler__icon1")


    }
    return (
        <div className="footer">
            <div className="footer-container container">
                <div className="getStart">
                    <img src={logo} alt="" />
                    <h1>Get Started Now</h1>
                    <h4>Setup is easy and takes under 5 minutes.</h4>
                    <button>Get Started Now</button>
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
                <div className="footerNav">
                    <div className="foterLogo">
                        <div className="img">
                            <img src={logo} alt="" />
                            <h2>Marico</h2>
                        </div>
                        <p>info@marico.co</p>
                    </div>
                    <nav className="nav1">
                        <ul className={collapse1}>
                            <li className="nav__item"><a className="nav__link1" href="#">About</a></li>
                            <li className="nav__item"><a className="nav__link1" href="#">Pricing</a></li>
                            <li className="nav__item"><a className="nav__link1" href="#">Blog</a></li>
                            <li className="nav__item"><a className="nav__link1" href="#">Sign in</a></li>
                        </ul>
                        <div className={togglrIcon} onClick={onToggle}>
                            <div className="line1__1"></div>
                            <div className="line1__2"></div>
                            <div className="line1__3"></div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer