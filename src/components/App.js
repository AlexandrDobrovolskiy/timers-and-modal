import React, { Component, Fragment } from "react";
import { DoubleTimer } from "utils";
import ProgressCircle from "./ProgressCircle";
import Avatar from "./Avatar";

const AvatarWithTimer = ({ local, global, run }) => {
  const isLocalLeft = local.leftValue === 0,
    localPercentage = local.leftValue / (local.duration / 100),
    globalPercentage = global.leftValue / (global.duration / 100);

  return (
    <Fragment>
      <button onClick={run}>Run Timer</button>
      <ProgressCircle
        percentage={localPercentage || globalPercentage}
        color={isLocalLeft ? "#DB5700" : "#4F9101"}
      >
        <div style={{ position: "absolute" }}>
          <Avatar />
        </div>
      </ProgressCircle>
    </Fragment>
  );
};

class App extends Component {
  state = {
    localDuration: 1000,
    globalDuration: 1000
  };

  updateDurationByName = name => event => {
    const { value } = event.target;
    this.setState({ [name]: parseInt(value, 10) });
  };

  render() {
    const { localDuration, globalDuration } = this.state;

    return (
      <div className="App container">
        Local
        <input
          type="number"
          value={localDuration}
          onChange={this.updateDurationByName("localDuration")}
        />
        Global
        <input
          type="number"
          value={globalDuration}
          onChange={this.updateDurationByName("globalDuration")}
        />
        <DoubleTimer localDuration={localDuration} globalDuration={globalDuration}>
          {AvatarWithTimer}
        </DoubleTimer>
      </div>
    );
  }
}

export default App;
