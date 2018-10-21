import { Component } from "react";
import { createPortal } from "react-dom";

const portalRoot = document.querySelector("#portal");

export default class Portal extends Component {
  el = document.createElement("div");

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}
