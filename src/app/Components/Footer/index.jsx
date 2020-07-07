import React from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";
const Footer = () => (
  <div className="Footer">
    <p style={{ position: "relative", top: "10px" }}>Copyright © 2020 Olykir</p>
  </div>
);
export default Footer;
