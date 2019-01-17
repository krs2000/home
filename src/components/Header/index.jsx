import React from "react";
import styled from "styled-components";
import { color, device } from "../../constants.js";
import { Bulb } from "./.";
const Header = props => {
  const Wrapper = styled.div`
    color: ${props.color ? props.color : color.dark};
    font-style: oblique;
    text-transform: capitalize;
    cursor: pointer;
  
    &:first-letter {
      color: ${color.primary};
    }
    @media ${device.laptop} {
    }
  `;

  return (
    <Wrapper>
     
      <h2>{props.text}</h2>
    </Wrapper>
  );
};

export default Header;
