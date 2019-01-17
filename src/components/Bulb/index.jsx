import React from "react";
import styled, { keyframes } from "styled-components";
import { color } from "../../constants.js";
import bulb from "../../assets/bulb.svg";
import rotateCenter from "../../assets/rotateCenter.svg";

const spinner = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Rotate = styled.div`
  height: auto;
 
  position: relative;
  font-family: Roboto;
  color: ${color.light};
  img {
    width: 30vw;
  }
  .rotateCenter {
    position: absolute;
    top: 10%;
    left:0;
    height: 50%;
    animation: ${spinner} 5s linear infinite;
  }
`;
const Bulb = props => {
  return (
    <Rotate>
      <img className="bulb" src={bulb} alt="bulb icon" />
      <img className="rotateCenter" src={rotateCenter} alt="flame" />
    </Rotate>
  );
};

export default Bulb;
