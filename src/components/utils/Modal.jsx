import React, { Component, Fragment } from "react";
import Portal from "./Portal";
import PropTypes from "prop-types";
import styled from "styled-components";

const CloseButton = ({ close }) => {
  return <button onClick={close}>Close</button>;
};

export default class Modal extends Component {
  state = {
    isOpened: false
  };

  static propTypes = {
		trigger: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    actions: PropTypes.func
  };

  static defaultProps = {
    actions: CloseButton
  };

  toggle = () => {
    const { isOpened } = this.state;
    this.setState({ isOpened: !isOpened });
  };

  render() {
    const { isOpened } = this.state;
    const { children, trigger, title, actions } = this.props;

    return (
      <Fragment>
        {trigger({ open: this.toggle })}
        {isOpened && (
          <Portal>
            <ModalWrapper>
              <ModalContent>
                <Header>{title}</Header>
                {children}
                <Footer>{actions({ close: this.toggle })}</Footer>
              </ModalContent>
              <Background onClick={this.toggle} />
            </ModalWrapper>
          </Portal>
        )}
      </Fragment>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 55vw;
  min-height: 45vh;
  background-color: #262830;
  position: relative;
  -webkit-box-shadow: 0px 0px 32px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 32px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 32px -3px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  color: #000000;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const Header = styled.div`
  background-color: #1f2128;
  border-radius: 8px 8px 0 0;
  padding: 5px;
  color: white;
	text-transform: uppercase;
	font-size: 1.5rem;
	font-weight: lighter;
`;

const Footer = styled.div`
  background-color: #1f2128;
  border-radius: 0 0 8px 8px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
