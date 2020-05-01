import React from 'react';
import './Style.css'
import { NavLink } from 'react-router-dom'
const Footer = () => (
    <div className="Footer">
        <p style={{position: "relative", left: "10vw"}}>Copyright © 2020 Olykir</p>
        <NavLink style={{position: "relative", left: "60vw", top: "-20px", color: "white", textDecoration: "none"}} to="/staff">Staff</NavLink>
        <a style={{position: "relative", left: "61vw", top: "-20px", color: "white", textDecoration: "none"}} href="/donate">Donate</a>
        <a style={{position: "relative", left: "62vw", top: "-20px", color: "white", textDecoration: "none"}} href="/support">Support</a>
        <NavLink style={{position: "relative", left: "63vw", top: "-20px", color: "white", textDecoration: "none"}} to="/commands">Commands</NavLink>
        <NavLink style={{position: "relative", left: "64vw", top: "-20px", color: "white", textDecoration: "none"}} to="/leaderboard">Leaderboard</NavLink>
    </div>
)

export default Footer;