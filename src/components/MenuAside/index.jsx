import React, { Component } from 'react';
import styled from 'styled-components';
import { Delayed } from '../'
import { Header } from '../'
import color from '../../constants.js'
const Wrapper = styled.section`
position: fixed;
z-index:2;
cursor: pointer;
color: ${color.primary};
overflow: visible;
width:1rem;
  `;

// const Dot = styled.section`
//   background-color: #dbaf40;
//   opacity: 1;
//   width:.3vh;
//   height:25%;
//    ${props => props.active  ? 'background-color:transparent' : 'background-color:  #dbaf40'}
//     `;
const HeaderBox = styled.section`
  position: fixed;
  top:20%;
  left:calc(20px + 5%);
  z-index:1;
  cursor: pointer;
  color: ${color.primary};
  overflow: visible;
  width:1rem;
    `;


class MenuAside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }



  render() {
    return (
      <Wrapper><HeaderBox>{this.props.options.map(x => this.props.active === x.index && x.index > 0 && <Delayed  key={`index-${x.index}`} waitBeforeShow={500}> <Header rotate={true} text={x.name} color={this.props.active < 3 ? color.dark : color.light} /></Delayed>)}</HeaderBox>
      </Wrapper>
    );
  }
}





export default MenuAside;