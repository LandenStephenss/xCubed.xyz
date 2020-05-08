import React from "react";

class CommandCard extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    const command = this.props.command;
    return (
      <div className={`Command ${this.props.transitionState}`}>
        <p>
          <span className="blurple">Name:</span> {command.help.name}
        </p>
        <p>
          <span className="blurple">Description: </span>{" "}
          {command.help.description}
        </p>
        {command.config.aliases.length >= 1 ? (
          <p>
            <span className="blurple">Aliases:</span>{" "}
            {command.config.aliases.join(", ")}
          </p>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default CommandCard;
