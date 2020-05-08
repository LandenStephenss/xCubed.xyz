import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";
import Button from "../Button";
const NavBar = ({ login: { loggedIn, username, discrim, isAdmin } }) => (
  <div>
    <nav className="nav">
      <div className="test">
        <span className="xNav">x³</span>
        <ul className="NavLinks">
          <li className="NavItem">
            <NavLink exact className="NavLink" to="/">
              Home
            </NavLink>
          </li>
          <li className="NavItem">
            <NavLink exact className="NavLink" to="/commands">
              Commands
            </NavLink>
          </li>
          <li className="NavItem">
            <a className="NavLink" href="/support">
              Support
            </a>
          </li>
          <li className="NavItem">
            <a className="NavLink" href="/donate">
              Donate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
export default withRouter(connect((store) => store)(NavBar));
