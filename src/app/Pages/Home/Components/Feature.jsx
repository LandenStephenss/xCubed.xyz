import React from "react";

class Feature extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <div className="FeatureCard">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {this.props.icon}
        </div>
        <p style={{ fontSize: "22px" }}>{this.props.featureName}</p>
        <p
          style={{
            fontSize: "12px",
            textAlign: "center",
            position: "relative",
            top: "-30px",
            marginBottom: "-25px",
          }}
        >
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default Feature;
