import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Portal } from "utils";

import { Card } from './Cards'
import { AbsoluteContainer } from "./Containers";
import { Button } from "./Buttons";

const CloseActionButton = ({ close }) => {
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
    actions: CloseActionButton
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
                <Header>
                  {title}
                  <CloseButton onClick={this.toggle}>
                    <CloseImage src="./cancel-music.svg" alt="modal-close" />
                  </CloseButton>
                </Header>
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

const ModalWrapper = styled(AbsoluteContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Card)`
  max-width: 600px;
  min-height: 45vh;
  background-color: #262830;
  position: relative;
  color: #000000;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Background = styled(AbsoluteContainer)`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  background-color: #1f2128;
  border-radius: 8px 8px 0 0;
  padding: 5px;
  color: white;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: lighter;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const Footer = styled.div`
  background-color: #1f2128;
  border-radius: 0 0 8px 8px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CloseButton = styled(Button)`
  border-radius: 50%;
  background-color: #e40c33;
  color: white;
  margin-top: auto;
  margin-bottom: auto;
  height: 24px;
  width: 24px;
`;

const CloseImage = styled.img`
  height: 100%;
  width: 100%;
`;
