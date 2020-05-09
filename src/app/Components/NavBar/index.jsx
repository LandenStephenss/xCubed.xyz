import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";
import Button from "../Button";
class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
    };
  }

  async componentDidMount() {
    var user = await fetch("/oauth/state").then((res) => res.json());
    if (user.loggedIn) {
      this.state.loggedIn = true;
      this.state.user = user.user;
    }
    console.log(this.state)
    this.forceUpdate();
    console.log("Logging in!");
  }

  render() {
    return (
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
          {this.state.loggedIn === true ? (
            <div style={{marginTop: "-15px", marginLeft: "auto"}}>
              <p style={{color: "white"}}>
                Olykir<span style={{color: "#7289DA", fontSize: "14px"}}>#{this.state.user.discriminator}</span>
              </p>
              <a style={{color: "white", position: "relative", top: "-16px", textDecoration: "none"}} href="/oauth/logout">Logout</a>
            </div>
          ) : (
            <div style={{marginLeft: "auto"}}>
              <Button link="/oauth/login">Login</Button>
            </div>
          )}
        </nav>
      </div>
    );
  }
}
export default NavBar;
