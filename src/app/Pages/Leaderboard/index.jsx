import React, { PureComponent } from "react";
import LeaderboardCard from "./Components/Card.jsx";

export default class Leaderboard extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      items: [],
      error: null,
      isLoaded: false,
    };
  }
  async componentDidMount() {
    await fetch(`https://xcubed.xyz/api/v1/users/topLevels`) // why the fuck is this not working
      .then((res) => res.json())
      .then((res) => {
        this.state.items = res.users;
        this.state.isLoaded = true;
        this.forceUpdate();
      });
  }
  render() {
    if (!this.state.isLoaded) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ color: "white" }}>Loading...</p>
        </div>
      );
    } else {
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              top: "20px",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "22px",
                width: "100%",
                textAlign: "center",
              }}
            >
              Top 100 Levels!
            </p>
            {this.state.items.map((item) => (
              <LeaderboardCard
                key={item.id}
                user={item}
                rank={this.state.items.indexOf(item)}
              />
            ))}
          </div>
        </>
      );
    }
  }
}
