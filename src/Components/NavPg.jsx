import "./NavCSS.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./NavContent/About";
import Menu from "./NavContent/Menu";
import Info from "./NavContent/info";
import Orderhistory from "./NavContent/OrderHistory";
import Home from "./Home";
import LoginPg from "./LoginPg";
import "./R_App.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavPg = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isMobileView, setMobileView] = useState(false);

    // Ensure menu starts closed & handle screen resizing
    useEffect(() => {
        // setMobileView(false); 
        // Close menu when component mounts

        const handleResize = () => {
            if (window.innerWidth > 715) {
                setMobileView(false); // Close menu when switching to desktop
            }
            
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div>
                <Router>
                    <div className="nav">
                        <h1 className="logo">RESTRO</h1>

                        {/* Hamburger Menu */}
                        <div className="hamburger" onClick={() => setMobileView(isMobileView)}>
                            {isMobileView ? <FaTimes /> : <FaBars />}
                        </div>

                        {/* Navigation List */}
                        <ul className={`nav-list ${isMobileView ? "active" : ""}`}>
                            <li className="nav-item">
                                <Link to="/" onClick={() => setMobileView(true)}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" onClick={() => setMobileView(true)}>
                                    About US
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu" onClick={() => setMobileView(true)}>
                                    Menu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/info" onClick={() => setMobileView(true)}>
                                    Info
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orderhistory" onClick={() => setMobileView(true)}>
                                    Order History
                                </Link>
                            </li>
                            <button className="nav-item" id="login" onClick={() => {
                                setLoginOpen(true);
                                setMobileView(true);
                            }}>
                                LOGIN
                            </button>
                        </ul>
                    </div>

                    <hr />
                    <hr />

                    {/* Page Routing */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/info" element={<Info />} />
                        <Route path="/orderhistory" element={<Orderhistory />} />
                    </Routes>

                    {/* Login Modal */}
                    {isLoginOpen && <LoginPg isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />}
                </Router>
            </div>
        </>
    );
};

export default NavPg;
