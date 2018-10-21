import React, { Component } from "react";
import AvatarPicker from "./AvatarPicker";
import styled from "styled-components";
import { Button } from "elements";
import { CircledImage } from "../elements";

const images = [
  {url: "./avatars/879012314-1024x1024.jpg"},
  {url: "./avatars/822657060-1024x1024.jpg"},
  {url: "./avatars/812419994-1024x1024.jpg"},
  {url: "./avatars/844084632-1024x1024.jpg"},
  {url: "./avatars/677059814-1024x1024.jpg"},
  {url: "./avatars/689204952-1024x1024.jpg"},
  {url: "./avatars/879012314-1024x1024.jpg"},
  {url: "./avatars/822657060-1024x1024.jpg"}
]

const getAvatar = () => JSON.parse(sessionStorage.getItem("avatar"));

export default class Avatar extends Component {
  state = {
    image: getAvatar() || {url: "./avatars/879012314-1024x1024.jpg"}
  }

  onSelectAvatar = (image) => {
    sessionStorage.setItem("avatar", JSON.stringify(image))
    this.setState({image})
  }

  render() {
    const { image } = this.state;
    return (
      <IamgeWrapper>
        <CircledImage src={image.url} alt="current-avatar" />
        <AvatarPicker
          images={images}
          onSelect={this.onSelectAvatar}
        >
          {({ open }) => (
            <EditButton onClick={open}>
              <img
                style={{ width: "35%", height: "35%" }}
                src="./edit.svg"
                alt="edit"
              />
            </EditButton>
          )}
        </AvatarPicker>
      </IamgeWrapper>
    );
  }
}

const IamgeWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: double 7px transparent;
  border-radius: 50%;
  background-image: linear-gradient(yellow, orange), radial-gradient(circle at top, yellow, orange);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditButton = styled(Button)`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  padding: 0;

  :hover {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
  }

  top: 0;
  left: 0;
`;
