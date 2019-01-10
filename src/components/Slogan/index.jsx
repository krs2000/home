import React from 'react';
import styled , { keyframes } from 'styled-components';
import { Delayed } from '../'
import color from '../../constants.js'
import {Bulb} from '../'
const HomepageTextBox = styled.section`
      ::first-letter {
          font-weight: 600;
          color: ${color.primary};
          text-transform: uppercase;}
  `;

const Wrapper = styled.section`
  z-index: 99;
 

  font-size: 10vh;
  font-weight: 300;
  letter-spacing:.4rem;
  font-family: Roboto;
  color:  ${color.light};
  display: flex;
  flex-direction: row;
  align-items: flex-start;

 justify-content: center;
  width:100vh;
  height:100vh;
.row{
  display:flex;
  align-itmes:flex-end;
  height:160px
  line-height:300px;
  font-weight:300;
}
  `;



const Slogan = (props) => {
  return (<Wrapper>
    <Delayed waitBeforeShow={500} >
    <HomepageTextBox className='fadeIn'><div>Making</div><div className='row'><Bulb/>deas</div><div>happen</div></HomepageTextBox>
    </Delayed>
    </Wrapper>)
}

export default Slogan;