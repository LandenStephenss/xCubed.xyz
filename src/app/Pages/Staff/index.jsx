import React from "react";
import "./Style.css";
import Users from "./users.json";
const Fetch = require("node-fetch");
export default class Staff extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      contribs: null,
    };
  }

  async componentDidMount() {
    var contribs = await Fetch(
      "http://api.github.com/repos/LandenStephenss/xCubed/contributors"
    ).then((r) => r.json());
    this.state.contribs = contribs;
    this.forceUpdate();
  }

  render() {
    if (this.state.contribs === null) {
      return (
        <main>
          <p style={{ fontSize: "32px", color: "white", textAlign: "center" }}>
            Developers
          </p>
          <div className="Developers">
            {Object.values(Users.Developers).map((user) => (
              <div className="DevCard">
                <p className="blurple" style={{ fontSize: "22px" }}>
                  {user.name}
                </p>
                <img className="img" src={user.image} />
                <div>
                  <p>{user.about}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "32px", color: "white", textAlign: "center" }}>
            Contributors
          </p>
          <div className="Contributors">
            <p style={{ color: "white", textAlign: "center" }}>Loading...</p>
          </div>
        </main>
      );
    } else {
      return (
        <main>
          <p style={{ fontSize: "32px", color: "white", textAlign: "center" }}>
            Developers
          </p>
          <div className="Developers">
            {Object.values(Users.Developers).map((user) => (
              <div className="DevCard">
                <p className="blurple" style={{ fontSize: "22px" }}>
                  {user.name}
                </p>
                <img className="img" src={user.image} />
                <div>
                  <p>{user.about}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "32px", color: "white", textAlign: "center" }}>
            Contributors
          </p>
          <div className="Contributors">
            {this.state.contribs.map((contributor) => (
              <div
                className="ContribCard"
                onClick={() =>
                  (location.href = "https://github.com/" + contributor.login)
                }
              >
                <p className="blurple">{contributor.login}</p>
                <img className="img" src={contributor.avatar_url} />
              </div>
            ))}
          </div>
        </main>
      );
    }
  }
}
