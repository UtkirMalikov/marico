import "./Navbar.css"
import LogoM from "../logo/logo.png"
import { useState } from "react"
function Navbar() {
    const [collapse, setCollapse] = useState("nav__menu")
    const [togglrIcon, setToggleIcon] = useState("toggler__icon")
    const onToggle = () => {
        collapse === 'nav__menu'
            ? setCollapse('nav__menu nav__collapse')
            : setCollapse('nav__menu')

        togglrIcon === "toggler__icon"
            ? setToggleIcon("toggler__icon toggle")
            : setToggleIcon("toggler__icon")


    }

    return (
        <div className=" navbar">
            <div className={togglrIcon} onClick={onToggle}>
                        <div className="line__1"></div>
                        <div className="line__2"></div>
                        <div className="line__3"></div>
                    </div>
            <div className="navbar-container container">
                <div className="logo">
                    <div className="logoImg">
                        <img src={LogoM} alt="logo" />
                    </div>
                    <h1>Marico

                    </h1>
                </div>
                <div className= "list">
                    <ul className={collapse}>
                        <li>
                            <select>
                                <option>Use Cases</option>
                                <option>Use Cases</option>
                                <option>Use Cases</option>
                            </select>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="registration">
                    <span>login</span>
                    <button>Sign Up</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar