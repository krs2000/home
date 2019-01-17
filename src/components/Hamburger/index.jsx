import React, { Component } from "react";
import { MenuButton, Menu } from "../";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { color } from "../../constants.js";
const Wrapper = styled.div`
position: fixed;
top:16px
right:16px;
z-index:99;
width: 48px;
height: 48px;

  `;
const ProgressBar = styled.div`
  top: 14px;
  right: 21px;
  position: fixed;
  .circle-background,
  .circle-progress {
    fill: none;
  }
  .circle-progress {
    stroke: ${color.primary};
    stroke-linecap: round;
    stroke-linejoin: round;
   
  }
`;

class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen:  false
    };
  }

  render() {
    const sqSize = this.props.sqSize;
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    var height = document.body.clientHeight;
    const dashOffset =
      dashArray -
      dashArray * (window.pageYOffset / (height - window.innerHeight));
    return (
      <ProgressBar>
        <svg
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}
        >
          <circle
            className="circle-background"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
          />
          <circle
            className="circle-progress"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props
              .sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }}
          />
        </svg>
      </ProgressBar>
    );
  }
}
CircularProgressBar.defaultProps = {
  sqSize: 60,
  percentage: 25,
  strokeWidth: 5
};
class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== prevProps.location) {
      this.setState({ menuOpen: false });
    }
  }

  handleMenuClick = () => {
    console.log('ds')
    this.setState({ menuOpen: !this.state.menuOpen });

  };

  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <div>
        <Wrapper onClick={() => this.handleMenuClick()}>
          <CircularProgressBar percentage={this.props.active * 25} />
          <MenuButton isOpen={this.state.menuOpen} color={color.light} />
        </Wrapper>
        <Menu
          // onClick={() => this.handleLinkClick()}
          isOpen={this.state.menuOpen}
        />
        
      </div>
    );
  }
}

export default withRouter(Hamburger);
