import React from "react";
import "./style.css";
import Button from "../../Components/Button";
import Feature from "./Components/Feature";
var DivToRef = React.createRef()
export default React.memo(() => (
  <main>
    <br />
    <br />
    <div className="LandingHeader">
      <p className="LandingHeaderTop">
        <span className="underline">xCubed</span> is the bot for your server!
      </p>
      <p style={{ textAlign: "center", width: "100%" }}>
        xCubed gives you the power to moderate your server with ease, change
        things specifically for your server, and much more!
      </p>
      <Button
        className="HeaderButton"
        link="https://discordapp.com/oauth2/authorize?client_id=626630111004852224&scope=bot&permissions=469822503"
      >
        Add to discord!
      </Button>
      {/* <Button
        className="HeaderButton"
        onClick={() => {
          DivToRef.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest"
          })
        }}
      >
        See features
      </Button> */}
    </div>
    <br />
    <br />
    <br />
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <p
        style={{
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "26px",
          marginBottom: "-20px",
          marginTop: "20px",
        }}
        ref={DivToRef}
      >
        Features!
      </p>
      <img src="/static/arrow_down.png" className="DownArrow" />
    </div>
    <div className="Features">
      <div className="FeatureRow">
        <Feature
          description="xCubed is hosted on servers that almost never go down. The only time the bot itself goes down is for whenever updates are being applied!"
          featureName="99.9% Uptime!"
          icon={<img className="FeatureIcon" src="/static/uptime.png" />}
        />
        <Feature
          description="xCubed is made for its users, with simple commands that can be figured out by anybody!"
          featureName="Made For Users!"
          icon={<img className="FeatureIcon" src="/static/men.png" />}
        />
        <Feature
          description="xCubed secures everything, we only store your avatar hash, user ID, username, and statistics that our commands use such as levels."
          featureName="Security!"
          icon={<img className="FeatureIcon" src="/static/lock.png" />}
        />
      </div>
      <div className="FeatureRow">
        <Feature
          description="xCubed has a direct connection to 1Gb/s ethernet as well as plenty of hardware dedicated to it so that the bot is always blazing fast!"
          featureName="Blazing Fast!"
          icon={<img className="FeatureIcon" src="/static/stopwatch.png" />}
        />

        <Feature
          description="xCubed has plenty of customizable settings to fit your needs, such as prefix, moderation settings, and much more!"
          featureName="Customizable!"
          icon={<img className="FeatureIcon" src="/static/settings.png" />}
        />
        <Feature
          description="xCubed has currency features to keep your server nice and competative, with commands such as steal your members will always be on edge!"
          featureName="Currency!"
          icon={<img className="FeatureIcon" src="/static/currency.png" />}
        />
      </div>
    </div>
    <br />
    <br />
    <br />
  </main>
));
