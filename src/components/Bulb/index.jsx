import React from 'react';
import styled, { keyframes } from 'styled-components';
import {color} from '../../constants.js'
import bulb from '../../assets/bulb.svg';
import rotateCenter from '../../assets/rotateCenter.svg';

const spinner = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Rotate = styled.div`
height:auto;
width:auto;
position:relative;
font-size: 1.2em;
font-weight: 300;
letter-spacing:.1rem;
font-family: Roboto;
color:  ${color.light};
::first-letter {
  font-weight: 600;
  color: ${color.primary};
  text-transform: uppercase;}
  &:after{
  position:absolute;
  left:1em;
  top:.9em;
  content:'deas';
  font-size: 1.3em;
  }
  &:before{
     position:absolute;
     left:1.7em;
     top:.1em;
     content:'Making'
   }
img{
  height:100%;
}
.rotateCenter{
  position:absolute;
  top:.25em;
  left:.3em;
  height:1em;
  animation: ${spinner} 5s linear infinite;
}
 
`;
const Bulb = (props) => {

  return (<Rotate>
    <img className='bulb' src={bulb} alt='bulb icon' />
    <img className='rotateCenter' src={rotateCenter} alt='flame' />
  </Rotate>)
}

export default Bulb;