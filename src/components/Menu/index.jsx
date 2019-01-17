import React from "react";
import styled ,{css}from "styled-components";
import { withRouter } from "react-router-dom";
import { color, device } from "../../constants.js";
import { Link } from "react-router-dom";
import {ok } from '../../assets/ok.svg'
import coding from '../../assets/coding.png'
import spotlight from "../../assets/spotlight.jpg";

const Item = styled.div`
  background: ${color.dark};
  height: 2rem;
  width: 100%;
  height: 12vh;
  cursor: pointer;
  line-height: 2em;
  font-weight: 600;
  transform-origin-y: 0%;
  color: ${color.light};
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 12vh;
  z-index:999;
  &:hover {
    color: #dbaf40;
  }
`;

const menu = [
  {
    name: "Welcome"
  },
  {
    name: "Blog"
  },
  {
    name: "Projects"
  },
  {
    name: "About"
  },
  {
    name: "Contact"
  }
];

const scrollToMyRef = (index, props) => {
  props.history.push("/" + index);
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index:1;
  width: 0;
  height:100vh;
 
${props => props.open &&    css`
background: rgba(14, 17, 17, 0.5);
width: 100vw;
`};};
  
  color: ${color.light};

`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  

`;

const BlackBox = styled.div`
  width: 100vw;
// display:flex;
// justify-content:center;
background-image: url(${props => props.img});
  height: 30vh;
  min-height:200px;
  z-index:99;
  @media ${device.laptop} {
    width: 20vw;
  }
  background-position: center;
border-bottom:3px solid ${color.primary};

  
`;

const Menu = props => {
  const { isOpen } = props;
  const Sidebar = styled.div`
    width: 100vw;

    display: flex;
    z-index:12;
    flex-direction: column;
  
    margin: ${isOpen ? "0rem" : "-200rem"};
    padding-bottom: 10vh;
 
    background-image: url(${props => props.img});
    @media ${device.laptop} {
      width: 20vw;
    }
  `;

  return (
    <Wrapper open={props.isOpen}>
      <Sidebar img={spotlight} className={props.isOpen ? "slideRight" : ""}>
        <BlackBox img={spotlight}></BlackBox>
        {menu.map((item, index) => (
          <LinkStyled to={`/${item.name}`} key={`item-${index}`}>
            <Item>{item.name}</Item>
          </LinkStyled>
        ))}
      </Sidebar>
 
    </Wrapper>
  );
};

export default withRouter(Menu);
