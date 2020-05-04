import React from 'react';
import "./CardStyle.css";
import { botToken } from '../../../../../config.json'
class LeaderboardCard extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        const user = this.props.user
        
        return (
        <div className="LeaderboardCard">
            <img draggable="false" style={{width: "80px", height: "80px", borderRadius: "50%", marginRight: "10px"}}src={user.avatar || "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"} />
            <div style={{textAlign: "center"}}>
                <p style={{color: "orange"}}>User:</p>
                <p>{user.username || "N/A"}</p>
            </div>
            <div style={{textAlign: "center"}}>
                <p style={{color: "orange"}}>Level:</p>
                <p>{user.levels.level}</p>
            </div>
            <div style={{textAlign: "center"}}>
                <p style={{color: "orange"}}>XP:</p>
                <p>{user.levels.xp}</p>
            </div>
            <div style={{textAlign: "center"}}>
                <p style={{color: "orange"}}>Rank:</p>
                <p>{this.props.rank + 1}</p>
            </div>
        </div>
        )
    }
}

export default LeaderboardCard