import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { color } from "../../constants.js";
import { Link } from "react-router-dom";
import {ok } from '../../assets/ok.svg'
const Item = styled.div`
  background: ${color.light};
  height: 2rem;
  width: 100%;
  height: 10vh;
  cursor: pointer;
  line-height: 2em;
  font-weight: 400;
  transform-origin-y: 0%;
  color: ${color.dark};
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 10vh;
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
  z-index:12;
  width: 220px;
  color: ${color.light};

`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const BlackBox = styled.div`
  width: 100vw;

  height: 40vh;
  z-index:12;
  
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
 
    background-color:  ${color.dark};
  `;

  return (
    <Wrapper>
      <Sidebar className={props.isOpen ? "slideRight" : ""}>
        <BlackBox ></BlackBox>
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
