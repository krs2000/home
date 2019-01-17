import React, { Component } from "react";
import styled from "styled-components";
import LinkedIn from "../../assets/Linkedin.svg";
import Email from "../../assets/Email.svg";
import { color, device } from "../../constants.js";
import { Header } from "../";

const Wrapper = styled.section`
color: ${color.light}
display:flex;
flex-direction:column;
justify-content: space-around;
img{
  width:2rem;
  cursor:pointer;
  margin-right:15vw;
  &:hover{
   transform: scale(1.05);
  }
}
a{
  text-decoration:none;
}
span{
  font-style: oblique;
}
@media ${device.laptop} {
  p{
   margin-left:auto;
    max-width:50vw;
    text-align:center;
  }
}
`;

class SectionContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  render() {
    return (
      <Wrapper>
        <Header color={color.light} rotate="true" text="Contact" />
        <article>
          <p>
            In web dev, you are not going where no one has gone before. You are
            travelling a well-worn path of, inspired innovation and creativity.
          </p>
          <p>
            <span>Lorelle VanFossen</span>
          </p>
        </article>
        <p>
          <a
            href="https://www.linkedin.com/in/kris-krysiak-3aa83297/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="mailto:krskry@gmail.com">
            <img src={Email} alt="Email" />
          </a>
        </p>
      </Wrapper>
    );
  }
}

export default SectionContact;
