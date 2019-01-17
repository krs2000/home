import React from "react";
import styled from "styled-components";
import { Delayed } from "../";
import { Bulb } from "../";
import Typed from "react-typed";
import { color ,device} from "../../constants.js";
const HomepageTextBox = styled.div`

  max-width: 90vw;
  ::first-letter {
    font-weight: 900;
    color: ${color.primary};
    text-transform: uppercase;
  }

`;
const BulbContainer =styled.div`
position: relative;
span:nth-of-type(1) {
  font-size:calc(30vw / 1.37/1.7);
  position: absolute;
  top: 10%;
  left:calc(30vw ) ;
  letter-spacing:.3vw;
}
span:nth-of-type(2) {
  position: absolute;
  top: 50%;
  letter-spacing:3vw;
  font-size:calc(30vw / 1.37/1.2);
  left:calc(23vw ) ;
}



`
const Wrapper = styled.section`
  height: 100vw;
  
  @media ${device.laptop} {  
    transform:scale(.5);
  }
  font-family: Roboto;
  color: ${color.light};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:flex-start;
  .typed {
    letter-spacing:3vw;
    padding-left: 10%;
    font-size:calc(30vw / 1.37/1.7);
    width:50vw;
  }
`;

const WelcomeSection = props => {
  return (
    <Wrapper>
      <Delayed waitBeforeShow={1000}>
        <HomepageTextBox>
          <BulbContainer>
            <span>Making</span>
            <span>deas</span>
            <Bulb />
          </BulbContainer>
            <div className="typed">
              <Typed strings={["happen"]} typeSpeed={200} showCursor={true} />
            </div>{" "}
        </HomepageTextBox>
      </Delayed>
    </Wrapper>
  );
};

export default WelcomeSection;
