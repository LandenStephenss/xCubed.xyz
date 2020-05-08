import React, { PureComponent } from "react";
import commands from "./Commands.json";
import "./Style.css";
import CommandCard from "./Components/CommandCard";
import sleep from "../../util/sleep";

export default class Commands extends PureComponent {
  state = {
    searchQuery: "",
    transitionState: "fade-in",
  };
  updateSearch(ev) {
    this.lastTyped = Date.now();
    const { value } = ev.target;

    if (value === this.state.searchQuery) {
      return;
    }

    setTimeout(() => {
      const diff = Date.now() - this.lastTyped;
      if (diff > 300 && diff < 400) {
        this.lastTyped = Date.now();
        this.setState(
          {
            transitionState: "fade-out",
          },
          () =>
            sleep(250).then(() =>
              this.setState(
                {
                  searchQuery: value.toLowerCase(),
                  currentCategory: null,
                },
                () =>
                  this.setState({
                    transitionState: "fade-in",
                  })
              )
            )
        );
      }
    }, 350);
  }

  render() {
    const { searchQuery, transitionState, currentCategory } = this.state;
    return (
      <div>
        <br />
        <div className="commands">
          <textarea
            placeholder="Search..."
            rows={1}
            className="SearchBar"
            onKeyUp={(ev) => this.updateSearch(ev)}
          />{" "}
        </div>{" "}
        <div className={`commands`}>
          {" "}
          {Object.values(commands)
            .filter(
              (command) =>
                !searchQuery ||
                command.config.aliases.includes(searchQuery) ||
                command.help.description.toLowerCase().includes(searchQuery) ||
                command.help.name.toLowerCase().includes(searchQuery)
            )
            .map((command) => (
              <CommandCard
                transitionState={transitionState}
                command={command}
              />
            ))}{" "}
        </div>{" "}
      </div>
    );
  }
}
