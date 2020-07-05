import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";
import Button from "../Button";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import MobileModal from "./Components/MobileModal";
class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
      modal: false,
    };
  }

  // async componentDidMount() {
  //   var user = await fetch("/oauth/state").then((res) => res.json());
  //   if (user.loggedIn) {
  //     this.state.loggedIn = true;
  //     this.state.user = user.user;
  //   }
  //   console.log(this.state);
  //   this.forceUpdate();
  //   console.log("Logging in!");
  // }

  showModal() {
    console.log("Modal is now being shown");
    this.state.modal = true;
    this.forceUpdate();
  }

  hideModal() {
    this.state.modal = false;
    this.forceUpdate();
  }

  render() {
    if (isMobile) {
      // Mobile Nav
      return (
        <div>
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#7289DA"
              fillOpacity="1"
              d="M0,64L48,64C96,64,192,64,288,90.7C384,117,480,171,576,176C672,181,768,139,864,133.3C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <nav
            className="nav"
            style={{ position: "absolute", left: "20px", top: "10px" }}
          >
            <div className="test">
              <span className="xNav">x³</span>
              <ul className="NavLinks">
                <li
                  className="NavItem"
                  style={{ top: "-10px", position: "relative" }}
                >
                  <NavLink exact className="NavLink" to="/">
                    Home
                  </NavLink>
                </li>
                <li
                  className="NavItem"
                  style={{ top: "-10px", position: "relative" }}
                >
                  <NavLink exact className="NavLink" to="/commands">
                    Commands
                  </NavLink>
                </li>
                {/* <li className="NavItem">
                  <a className="NavLink" href="/support">
                    Support
                  </a>
                </li>
                <li className="NavItem">
                  <a className="NavLink" href="/donate">
                    Donate
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      );
    } else {
      // Desktop Nav
      return (
        <div style={{position: "relative"}}>
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#7289DA"
              fillOpacity="1"
              d="M0,64L48,64C96,64,192,64,288,90.7C384,117,480,171,576,176C672,181,768,139,864,133.3C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

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
                <li className="NavItem">
                  <a className="NavLink" href="/staff">
                    Staff
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
    // return (
    //   <div>
    //     <svg
    //       className="wave"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 1440 320"
    //     >
    //       <path
    //         fill="#7289DA"
    //         fillOpacity="1"
    //         d="M0,64L48,64C96,64,192,64,288,90.7C384,117,480,171,576,176C672,181,768,139,864,133.3C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    //       ></path>
    //     </svg>
    //     <BrowserView>
    //       <BrowserModal />
    //     </BrowserView>
    //     <MobileView>
    //       <MobileModal />
    //     </MobileView>
    //   </div>
    // );
  }
}
export default NavBar;
