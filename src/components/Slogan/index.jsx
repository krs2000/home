import React from 'react';
import styled , { keyframes } from 'styled-components';
import { Delayed } from '../'
import color from '../../constants.js'
import {Bulb} from '../'
const HomepageTextBox = styled.section`
min-width:300px;
      ::first-letter {
          font-weight: 900;
          color: ${color.primary};
          text-transform: uppercase;}
  `;

const Wrapper = styled.section`
  z-index: 99;
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
}
  `;

const Slogan = (props) => {
  return (<Wrapper>
    <Delayed waitBeforeShow={500} >
    <HomepageTextBox className='fadeIn'><div className='row'><Bulb/></div><div className='bottomText'>happen</div></HomepageTextBox>
    </Delayed>
    </Wrapper>)
}

export default Slogan;