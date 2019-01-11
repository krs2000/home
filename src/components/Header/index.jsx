import React from 'react';
import styled from 'styled-components';

import color from '../../constants.js'

const Header  = (props) => {
  const  Wrapper = styled.section`
  color: ${ props.color ?  props.color : color.dark };
  letter-spacing:.5rem;
  text-align:center;
  z-index:99;
  text-transform:capitalize;
  font-size:1.5rem;
  position: fixed;
  top:calc(30vh + .1em);
  left:calc(30px + 2%);
  z-index:5;
  cursor: pointer;
  overflow: visible;
  width:1rem;
  h2{
  font-weight:300;}
  ${ props.rotate &&    'transform: rotate(90deg)' }
 `;

  return (<Wrapper>

 <h2 className={props.rotate}  >{props.text}</h2> 

</Wrapper>)
}

export default Header;