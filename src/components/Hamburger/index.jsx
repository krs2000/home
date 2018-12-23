import React, { Component } from 'react';
import { MenuButton, Menu } from '../'


class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
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
        <div onClick={() => this.handleMenuClick()}>
        <MenuButton open={this.state.menuOpen} color='white' />
        </div>
        {this.state.menuOpen && <Menu ></Menu>}
      </div >
    );
  }
}



export default Hamburger;