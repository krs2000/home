import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typed from 'react-typed';
import color from '../../constants.js'
import bulb from '../../assets/bulb.svg';
import rotate from '../../assets/rotate.svg';
import rotateInner from '../../assets/rotateInner.svg';
import rotateCenter from '../../assets/rotateCenter.svg';
const spinner = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const spinnerReverse = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(-360deg);
}
`;


const Rotate = styled.div`
height:auto;
width:auto;
position:relative;
img{
  height:100%;
 
}
.rotate{
  position:absolute;
  top:4%;
  left:5%;
  height:65%;
  animation: ${spinnerReverse} 12s linear infinite;
}
.rotateInner{
  position:absolute;
  top:4%;
  left:5%;
  height:2em;
}
.rotateCenter{
  position:absolute;
  top:.25em;
  left:.3em;
  height:1em;
  animation: ${spinner} 5s linear infinite;
}
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
`;
const Bulb = (props) => {

  const Wrapper = styled.section`
 
 `;

  return (<Rotate>  <img className='bulb' src={bulb} /><img className='rotateCenter' src={rotateCenter} />
  </Rotate>)
}

export default Bulb;