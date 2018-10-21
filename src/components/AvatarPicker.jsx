import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Modal } from "elements";
import { Button } from "elements";
import { CircledImage } from "../elements";

export default class AvatarPicker extends Component {
  state = {
    selected: null
  };

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    onSelect: PropTypes.func
  };

  onChange = image => () => {
    this.setState({ selected: image });
  };

  onSave = action => () => {
    const { onSelect } = this.props;
    const { selected } = this.state;
    onSelect(selected);
    action();
  };

  render() {
    const { images, children } = this.props;
    const { selected } = this.state;

    const isSelected = image => selected === image;

    const isInvalid = !this.state.selected;

    return (
      <Modal
        trigger={children}
        actions={({ close }) => (
          <SaveButton disabled={isInvalid} onClick={this.onSave(close)}>Save</SaveButton>
        )}
        title={"Choose your game avatar"}
      >
        <Gallery>
          {images.map((image, index) => (
            <ImageWrapper key={index} onClick={this.onChange(image)}>
              <CircledImage
                src={image.url}
                alt={`picker-${index}`}
                style={isSelected(image) ? selectedStyle : {}}
              />
            </ImageWrapper>
          ))}
        </Gallery>
      </Modal>
    );
  }
}

const selectedStyle = {
  border: "double 10px transparent",
  borderRadius: "50%",
  backgroundImage:
    "linear-gradient(#769F13, #498D12), radial-gradient(circle at top, #769F13, #498D12)",
  backgroundOrigin: "border-box"
};

const SaveButton = styled(Button)`
  height: 40px;
  min-width: 130px;
  font-weight: bold;
  background-image: linear-gradient(#769f13, #498d12);
  border-radius: 40px;
  border-bottom: 3px solid #234909;
  color: white;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  margin: 15px;
  border: 10px solid #3b3d44;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
