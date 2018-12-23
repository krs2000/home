import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
    padding: 4em;
    background: black;
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    z-index:98;
    color:white;
    display:flex;
    flex-direction: column;
  `;

const StyledLink = styled(Link) `
  color:white;
  text-decoration: none;
  padding:1rem;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const menu = ['Home', 'Blog', 'Projects', 'About', 'Contact']


    return (
      <Wrapper >
        {
          menu.map((item, index) => <StyledLink to="/getting-started" key={`item-${index}`}>{item}</StyledLink>)
        }
      </Wrapper >
    );
  }
}

export default Menu;