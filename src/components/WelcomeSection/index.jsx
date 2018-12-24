import React from 'react';
import styled from 'styled-components';
import img from '../../assets/decoration.jpg';
import {Slogan} from '../'

const Wrapper = styled.section`
height: 100vh;
width:100%;
background: black;
position: relative;
overflow: hidden;
  `;
const Decoration = styled.section`
  height: 120vh;
  width: 80vw;
  background: linear-gradient(to left, white, grey);
  position: absolute;
  right: -35vw;
  overflow: hidden;
  transform: rotate(45deg);
  top: -20vh;
    `;

const DecorationImage = styled.section`
width: 200%;
height: 200%; 
background-image: url(${img});
background-position: 0 0;
background-size: 80%;
  &: after {
  position: absolute;
  top: 5%;
  opacity: 0.3;
  content: '';
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to left, white, black);
  background-position: -60% 0;
}
  &: before {
  position: absolute;
  top: -10 %;
  opacity: 0.3;
  content: '';
  height: 100vh;
  width: 100vw;
  background: black;
  background-position: -60% 0;
}
  `;



const WelcomeSection = (props) => {

  return (<Wrapper><Decoration><DecorationImage /></Decoration>
  <Slogan/>
  </Wrapper>)
}

export default WelcomeSection;