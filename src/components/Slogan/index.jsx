import React from 'react';
import styled from 'styled-components';
import { Delayed } from '../'
import color from '../../constants.js'

const HomepageTextBox = styled.section`
      width: 300px;
      height: 300px;
      ::first-letter {
          font-weight: 600;
          color: ${color.primary};
          text-transform: uppercase;}
  `;

const Wrapper = styled.section`
  z-index: 1;
  position: absolute;
  top:0;
  left: 5vw;
  height: 40%;
  font-size: 10vh;
  font-weight: 900;
  letter-spacing:.4rem;
  font-family: Roboto;
  color:  ${color.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  margin-left: 3rem;
  `;


const Slogan = (props) => {
  return (<Wrapper><Delayed waitBeforeShow={500} ><HomepageTextBox className='fadeIn'><div>Making</div><div>ideas</div><div>happen</div></HomepageTextBox></Delayed></Wrapper>)
}

export default Slogan;