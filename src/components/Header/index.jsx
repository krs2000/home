import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';

const Header  = (props) => {
  
  const  Wrapper = styled.section`
  color: ${ props.color ?  props.color : 'black' };
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

  return (<Wrapper> <Typed className={props.rotate } 
    strings={[props.text]} 
    typeSpeed={100} 
    showCursor={false}
/>
{/* <h2 className={props.rotate && "fadeIn"}  >{props.text}</h2> */}

</Wrapper>)
}

export default Header;