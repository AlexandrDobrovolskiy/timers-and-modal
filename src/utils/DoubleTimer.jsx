import React, { Component } from "react";
import PropTypes from "prop-types";

import Timer from "./Timer";

export default class DoubleTimer extends Component {
  state = {
    local: {
      duration: this.props.localDuration
    },
    global: {
      duration: this.props.globalDuration
    }
  };

  static propTypes = {
    localDuration: PropTypes.number.isRequired,
    globalDuration: PropTypes.number.isRequired
  };

  static getDerivedStateFromProps = (props, state) => {
    state.local.duration = props.localDuration;
    state.global.duration = props.globalDuration;

    return state;
  };

  render() {
    const { local, global } = this.state;
    const { children } = this.props;

    return (
      <Timer duration={global.duration}>
        {globalContext => (
          <Timer duration={local.duration} onTimeOut={globalContext.run}>
            {localContext =>
              children({
                local: {
                  leftValue: localContext.timeLeft,
                  duration: local.duration
                },
                global: {
                  leftValue: globalContext.timeLeft,
                  duration: global.duration
                },
                run: localContext.run
              })
            }
          </Timer>
        )}
      </Timer>
    );
  }
}
