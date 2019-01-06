import React from 'react';
import styled from 'styled-components';

const HomepageTextBox = styled.section`
      width: 300px;
      height: 300px;
      ::first-letter {
          font-weight: 600;
          color: #dbaf40;
          text-transform: uppercase;
  `;

const Wrapper = styled.section`
  z-index: 1;
  position: absolute;
  top:0;
  left: 10vw;
  height: 40%;
  font-size: 3.4em;
  font-weight: 900;
  letter-spacing:.4rem;
  font-family: Roboto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  margin-left: 3rem;
  `;

  const Underline = styled.section`
  position: relative;
          &:after {
              position: absolute;
              bottom: -20px;
              left: 0;
              content: "";
              height: 1rem;
              width: 55px;
              background-color: #dbaf40;
              border-radius: 50px;
          }
`;

const Slogan = (props) => {
  return (<Wrapper><HomepageTextBox><div>Making</div><div>ideas</div><Underline>happen</Underline></HomepageTextBox></Wrapper>)
}

export default Slogan;