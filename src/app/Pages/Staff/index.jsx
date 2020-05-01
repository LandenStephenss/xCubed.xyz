import React from 'react';
import './Style.css'
import Users from './users.json'
export default React.memo(() => (
    <main>
        <p style={{fontSize: "32px", color: "white", textAlign: "center"}}>Developers</p>
        <div className="Developers">
                {Object.values(Users.Developers).map((user) => (
                    <div className="DevCard">
                        <p className="blurple" style={{fontSize: "22px"}}>{user.name}</p>
                        <img className="img" src={user.image}/>
                        <div>
                            <p>{user.about}</p>
                        </div>
                    </div>
                ))}
        </div>
    </main>
))