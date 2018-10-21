import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class ProgressCircle extends Component {
	state = {};
	
	static propTypes = {
		percentage: PropTypes.number,
		sqSize: PropTypes.number,
		strokeWidth: PropTypes.number,
		color: PropTypes.string
	}

  static defaultProps = {
    sqSize: 130,
    percentage: 25,
    strokeWidth: 8
  };

  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset =
      dashArray - ((dashArray * this.props.percentage) / 100) * -1;

    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <svg
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}
        >
          <circle
            className="circle-background"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius - this.props.strokeWidth / 4}
            strokeWidth={`${this.props.strokeWidth / 2}px`}
          />
          <circle
            className="circle-progress"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props
              .sqSize / 2})`}
            style={{
							stroke: this.props.color,
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }}
          />
        </svg>
        {this.props.children}
      </div>
    );
  }
}

