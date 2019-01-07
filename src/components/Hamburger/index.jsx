import React, { Component } from 'react';
import { MenuButton, Menu } from '../';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Delayed } from '../'

const  Wrapper = styled.section`
position: fixed;
top:16px
left:16px;
z-index:99;
cursor: pointer;
width: 48px;
height: 48px;
overflow: visible;
  `;
  const  ProgressBar = styled.div`
  top:14px;
  left:14px;
  position:fixed;
  .circle-background,
  .circle-progress {
  fill:  none
  }
  
  .circle-progress {
    stroke: rgb(219, 175, 64);
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  

    `;
  
  
class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


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
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      <ProgressBar>
      <svg
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}>
          <circle
            className="circle-background"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
     
            strokeWidth={`${this.props.strokeWidth}px`} />
          <circle
            className="circle-progress"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
          
            strokeWidth={`${this.props.strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }} />
 
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
      menuOpen: false,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.location !== prevProps.location){
      this.setState({ menuOpen: false });
    }
  }

  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div >
     <Delayed waitBeforeShow={1000} ><Wrapper onClick={() => this.handleMenuClick()}>
        <CircularProgressBar percentage={this.props.active * 25}/>
        <MenuButton isOpen={this.state.menuOpen} color='white' />
        </Wrapper>
  <Menu onClick={() => this.handleLinkClick()} isOpen={this.state.menuOpen} parallax={this.props.parallax} ></Menu>
</Delayed>
      </div >
    );
  }
}



export default withRouter(Hamburger);