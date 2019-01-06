import React from 'react';
import styled from 'styled-components';
import img from '../../assets/decoration.jpg';
import {Slogan} from '../'

const Wrapper = styled.section`
height: 100vh;
width:100%;

position: relative;
overflow: hidden;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;;
  `;




const WelcomeSection = (props) => {

  return (<Wrapper>
  <Slogan/>

  </Wrapper>)
}

export default WelcomeSection;