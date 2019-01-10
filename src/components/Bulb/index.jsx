import React from 'react';
import styled , { keyframes } from 'styled-components';
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
height:60%;
}
.rotateCenter{
  position:absolute;
  top:15%;
left:25%;
height:60px;
  animation: ${spinner} 5s linear infinite;
}
`;
const Bulb  = (props) => {
  
  const  Wrapper = styled.section`
 
 `;

  return (<Rotate>  <img className='bulb' src={bulb}/><img className='rotateCenter' src={rotateCenter}/>
</Rotate>)
}

export default Bulb;