import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h4>Sign Up For Our Quarterly Newsletter For Updates </h4>
        <div className="newsletter">
          <div className="form-div">
            <form>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                required
              />
              <br />
              <input id="submit" type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
      <div className="footer-nav">
        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/guest-membership">Guest Membership</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
