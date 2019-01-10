import React from 'react';
import styled from 'styled-components';
import {Slogan} from '../';
// import {Bulb} from '../'
const Wrapper = styled.section`
height: 100vh;
position: relative;
overflow: hidden;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
  `;

const WelcomeSection = (props) => {
  return (<Wrapper>
 <Slogan/>
  </Wrapper>)
}

export default WelcomeSection;