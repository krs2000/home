import React from 'react'
import styled from 'styled-components'
import {color,device} from '../../constants.js'

const Header  = (props) => {
  const  Wrapper = styled.section`
  color: ${ props.color ?  props.color : color.dark };
  letter-spacing:.5rem;
  text-align:center;
  z-index:99;
  text-transform:capitalize;
  font-size:1rem;
  z-index:5;
  cursor: pointer;
  overflow: visible;
  font-weight:600;
  padding:.2rem;
      @media ${device.laptop} {  
     font-size:1.5rem;
       padding:1rem;
  }
 `;

  return (<Wrapper>

 <h2>{props.text}</h2> 

</Wrapper>)
}

export default Header;