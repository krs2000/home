import React from 'react';
import styled from 'styled-components';

import color from '../../constants.js'

const Header  = (props) => {
  
  const  Wrapper = styled.section`
  color: ${ props.color ?  props.color : color.dark };
  letter-spacing:1rem;
  text-align:center;
  z-index:99;
  padding: 1.5rem 0;
  text-transform:capitalize;
  font-size:2rem;
  ${ props.rotate &&    'transform: rotate(90deg)' }
;
  // h2{
  //   padding: 1.5rem 0;
  //   margin:0;
  //   text-transform:capitalize;
   
  // }
  //   `;

  return (<Wrapper>

 <h2 className={props.rotate && "fadeIn"}  >{props.text}</h2> 

</Wrapper>)
}

export default Header;