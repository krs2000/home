import React from 'react';
import styled from 'styled-components';


const Header  = (props) => {
  
  const  Wrapper = styled.section`
  color:${props.color} ? black : ${props.color};
  letter-spacing:1rem;
  text-align:center;
    `;

  return (<Wrapper><h2>{props.text}</h2></Wrapper>)
}

export default Header;