import React from 'react';
import styled  from 'styled-components';
import { Delayed } from '../'
import {color} from '../../constants.js'
import {Bulb} from '../'
import Typed from 'react-typed';
const HomepageTextBox = styled.section`
min-width:290px;
      ::first-letter {
          font-weight: 900;
          color: ${color.primary};
          text-transform: uppercase;}
  `;

const Wrapper = styled.section`
  z-index: 20;
  font-size: 10vh;
  font-weight: 300;
  letter-spacing:.35em;
  font-family: Roboto;
  color:  ${color.light};
  display: flex;
  flex-direction: row;
  align-items:center;
  line-height:1em;
 justify-content: center;
  width:100vw;
  height:100vh;
.row{
  display:flex;
  align-itmes:flex-center;
  height:2.6em;
  font-weight:300;
}
.bottomText{
padding-left:0.2em;
font-size: 1.2em;
width:5em;
min-width:300px;
}
  `;

const Slogan = (props) => {
  return (<Wrapper>
    <Delayed waitBeforeShow={1000} >
    <HomepageTextBox className='fadeIn'><div className='row'><Bulb/></div><div className='bottomText'><Typed 
    strings={['happen']} 
    typeSpeed={200} 
    showCursor={true}
/></div></HomepageTextBox>
    </Delayed>
    </Wrapper>)
}

export default Slogan;