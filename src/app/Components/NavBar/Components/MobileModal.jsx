import React from "react";
import { NavLinkMobile, withRouter, NavLink } from "react-router-dom";
export default class BrowserNav extends React.PureComponent {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    console.log(this.props)
    if (!this.props.show) return null;
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}
