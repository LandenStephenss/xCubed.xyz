import React from "react";
import "./style.css";
import Button from "../../Components/Button";
import Feature from "./Components/Feature";
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#7289DA" fill-opacity="1" d="M0,96L6.2,122.7C12.3,149,25,203,37,229.3C49.2,256,62,256,74,256C86.2,256,98,256,111,256C123.1,256,135,256,148,218.7C160,181,172,107,185,106.7C196.9,107,209,181,222,192C233.8,203,246,149,258,112C270.8,75,283,53,295,37.3C307.7,21,320,11,332,10.7C344.6,11,357,21,369,37.3C381.5,53,394,75,406,117.3C418.5,160,431,224,443,240C455.4,256,468,224,480,202.7C492.3,181,505,171,517,149.3C529.2,128,542,96,554,69.3C566.2,43,578,21,591,16C603.1,11,615,21,628,69.3C640,117,652,203,665,218.7C676.9,235,689,181,702,144C713.8,107,726,85,738,64C750.8,43,763,21,775,48C787.7,75,800,149,812,186.7C824.6,224,837,224,849,224C861.5,224,874,224,886,240C898.5,256,911,288,923,298.7C935.4,309,948,299,960,256C972.3,213,985,139,997,106.7C1009.2,75,1022,85,1034,90.7C1046.2,96,1058,96,1071,133.3C1083.1,171,1095,245,1108,245.3C1120,245,1132,171,1145,133.3C1156.9,96,1169,96,1182,112C1193.8,128,1206,160,1218,186.7C1230.8,213,1243,235,1255,218.7C1267.7,203,1280,149,1292,149.3C1304.6,149,1317,203,1329,218.7C1341.5,235,1354,213,1366,197.3C1378.5,181,1391,171,1403,154.7C1415.4,139,1428,117,1434,106.7L1440,96L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path>
</svg> */
}
class Home extends React.PureComponent {
  constructor() {
    super();
  }
  render() {
    return (
      <main>
        <br />
        <div className="LandingHeader">
          <p className="LandingHeaderTop">
            <span className="underline">xCubed</span> is the bot for your
            server!
          </p>
          <p style={{ textAlign: "center", width: "100%" }}>
            xCubed gives you the power to moderate your server with ease, change
            things specifically for your server, and much more!
          </p>
          <Button
            className="HeaderButton"
            link="https://discordapp.com/oauth2/authorize?client_id=626630111004852224&scope=bot&permissions=469822503"
          >
            Add to Discord
          </Button>
          <Button
            className="HeaderButton"
            link="https://discord.com/invite/kQUpSgw"
          >
            Support
          </Button>
          <Button className="HeaderButton" link="/commands">
            Commands
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
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
          >
            Features!
          </p>
          <img src="/static/arrow_down.png" className="DownArrow" />
        </div>
        <div>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          {/* <!-- Main Page shit --> */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3483531587306211"
            data-ad-slot="6899460087"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
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
      </main>
    );
  }
}

export default Home;
