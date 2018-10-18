import React, { Component } from "react";
import Timer from "./Timer";

export default class DoubleTimer extends Component {
  state = {
    local: {
      timeLeft: 0,
      duration: this.props.localDuration
    },
    global: {
      timeLeft: 0,
      duration: this.props.globalDuration
    }
  };

  render() {
		const { local, global } = this.state;
		const { children } = this.props;

    return (
      <Timer duration={global.duration}>
        {globalContext => (
          <Timer duration={local.duration} onTimeOut={globalContext.run}>
            {localContext => children({
              globalTimeLeft: globalContext.timeLeft,
              localTimeLeft: localContext.timeLeft,
              run: localContext.run
            })}
          </Timer>
        )}
      </Timer>
    );
  }
}
