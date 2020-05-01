import React from 'react';
import './Style.css'
import Button from '../../Components/Button'
export default React.memo(() => (
    <main>
        <br/><br/>
        <div className="LandingHeader">
            <p className="LandingHeaderTop"><span className="underline">xCubed</span> is the bot for your server!</p>
            <p style={{textAlign: "center", width: "100%"}}>xCubed gives you the power to moderate your server with ease, change things specifically for your server, and much more!</p>
            <Button className="HeaderButton" link="https://discordapp.com/oauth2/authorize?client_id=626630111004852224&scope=bot&permissions=469822503">Add to discord!</Button>
            <Button className="HeaderButton">See features</Button>
        </div>
    </main>
))