import React from 'react';
import styled from 'styled-components';
import img from '../../assets/decoration.jpg';
import {Slogan} from '../'

const Wrapper = styled.section`
height: 100vh;
width:100vw;
background: black;
position: relative;
overflow: hidden;
  `;




const BlogSection = (props) => {

  return (<Wrapper><Decoration><DecorationImage /></Decoration>
  <Slogan/>
  </Wrapper>)
}

export default BlogSection;