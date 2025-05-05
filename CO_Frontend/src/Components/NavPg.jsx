// NavPg.jsx
import "./NavCSS.css";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import About from "./NavContent/About";
import Menu from "./NavContent/Menu";
import Info from "./NavContent/info";
import Orderhistory from "./NavContent/OrderHistory";
import Home from "./Home";
import LoginPg from "./LoginPg";
import SignupPg from "./SignupPg";
import "./R_App.css";

export default function NavPg() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(false);

  const handleOpenLogin = () => {
    setLoginOpen(true);
    setSignupOpen(false);
  };
  const handleOpenSignup = () => {
    setSignupOpen(true);
    setLoginOpen(false);
  };
  const handleClose = () => {
    setLoginOpen(false);
    setSignupOpen(false);
  };

  return (
    <Router>
      <nav className="nav">
        <h1 className="logo">RESTRO</h1>
        <div className="hamburger" onClick={() => setMobileView(!isMobileView)}>
          {isMobileView ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-list ${isMobileView ? "active" : ""}`}>
          <li className="nav-item"><Link to="/" onClick={() => setMobileView(false)}>Home</Link></li>
          <li className="nav-item"><Link to="/about" onClick={() => setMobileView(false)}>About US</Link></li>
          <li className="nav-item"><Link to="/menu" onClick={() => setMobileView(false)}>Menu</Link></li>
          <li className="nav-item"><Link to="/info" onClick={() => setMobileView(false)}>Info</Link></li>
          <li className="nav-item"><Link to="/orderhistory" onClick={() => setMobileView(false)}>Order History</Link></li>
          <button className="nav-item" onClick={handleOpenLogin}>LOGIN</button>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/info" element={<Info />} />
        <Route path="/orderhistory" element={<Orderhistory />} />
      </Routes>

      {isLoginOpen && (
        <LoginPg
          isOpen={isLoginOpen}
          onClose={handleClose}
          onSignupClick={handleOpenSignup}
        />
      )}

      {isSignupOpen && (
        <SignupPg
          isOpen={isSignupOpen}
          onClose={handleClose}
          onLoginClick={handleOpenLogin}
        />
      )}
    </Router>
  );
}
