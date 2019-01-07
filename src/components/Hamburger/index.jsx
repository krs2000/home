import React, { Component } from 'react';
import { MenuButton, Menu } from '../';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const  Wrapper = styled.section`
position: fixed;
top:2rem;
left:5%;
z-index:89;
cursor: pointer;
width: 48px;
height: 48px;
overflow: visible;
  `;
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
        <Wrapper onClick={() => this.handleMenuClick()}>
        <MenuButton isOpen={this.state.menuOpen} color='white' />
        </Wrapper>
  <Menu onClick={() => this.handleLinkClick()} isOpen={this.state.menuOpen} parallax={this.props.parallax} ></Menu>

      </div >
    );
  }
}



export default withRouter(Hamburger);