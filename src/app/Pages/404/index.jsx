import React, { PureComponent } from "react";
class Page404 extends PureComponent {
  constructor(props) {
    super();
  }
  render() {
    return (
      <p style={{ color: "white", textAlign: "center", fontSize: "32px" }}>
        <span style={{ color: "red" }}>Error!</span> Page does not exist!
      </p>
    );
  }
}

export default Page404;
