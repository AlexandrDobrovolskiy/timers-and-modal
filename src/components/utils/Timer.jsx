import { Component } from "react";
import PropTypes from "prop-types";

export default class Timer extends Component {
  state = {
    timeLeft: 0
  };

  static propTypes = {
    children: PropTypes.func.isRequired,
    duration: PropTypes.number.isRequired,
    onTimeOut: PropTypes.func,
    interval: PropTypes.number
  };

  static defaultProps = {
    onTimeOut: () => {},
    interval: 16 // 60 FPS
  };

  run = () => {
    const { duration, onTimeOut, interval } = this.props;
    this.setState({ timeLeft: duration });

    const step = () => {
      const { timeLeft } = this.state;
      let computed = timeLeft - interval;

      if (computed <= 0) {
        computed = 0;
        clearInterval(coutner);
        onTimeOut();
      }
      
      this.setState({ timeLeft: computed });
    };

    const coutner = setInterval(step, interval);
  };

  render() {
    const { children } = this.props,
          { timeLeft } = this.state;

    return children({ run: this.run, timeLeft });
  }
}
