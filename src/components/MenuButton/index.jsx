import React from 'react';
import styled from 'styled-components';

const  Wrapper = styled.section`
position: fixed;
top:2rem;
left:2rem;
z-index:99;
  `;

const MenuButton  = (props) => {

  return (<Wrapper><button>X</button></Wrapper>)
}

export default MenuButton;