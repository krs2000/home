import React, { Component } from "react";
import styled from "styled-components";
import LinkedIn from "../../assets/Linkedin.svg";
import Email from "../../assets/Email.svg";
import { color, device } from "../../constants.js";
import { Header } from "../";

const Wrapper = styled.section`
position:relative;
svg{
position:absolute;
width:35vw;
top:28vh;
left:12.5vw;
}
   article{

    margin-top:10vh;
    }
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
    max-width:50vw;
    text-align:center;
     font-style: italic;
    padding-left:30vw;
  }
  img{
    width:1.8rem;
      margin-right:2vw

  }
  svg{
    width:25vw;
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
        <div>
         <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 360 360">
          <g id="XMLID_30_">
            <path
              id="XMLID_158_"
              fill="none"
              d="M109.8,154.5v95.4h12.3V266v30.6c0,1.7,2.1,2.4,3.2,1.1l40.1-47.9h120v-95.4H109.8z"
            />
            <path
              id="XMLID_153_"
              fill="none"
              stroke="#FAFBFA"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              d="M109.8,221.7v28.1h12.3V266
			v30.6c0,1.7,2.1,2.4,3.2,1.1l40.1-47.9h120v-95.4h-45.1"
            />

            <line
              id="XMLID_148_"
              fill="none"
              stroke="#FAFBFA"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              x1="230.9"
              y1="176.3"
              x2="263.9"
              y2="176.3"
            />

            <line
              id="XMLID_144_"
              fill="none"
              stroke="#FAFBFA"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              x1="216.6"
              y1="201.6"
              x2="263.9"
              y2="201.6"
            />

            <line
              id="XMLID_143_"
              fill="none"
              stroke="#FAFBFAs"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              x1="188.6"
              y1="226.9"
              x2="263.9"
              y2="226.9"
            />
            <path
              id="XMLID_139_"
              fill="none"
              d="M78.8,217.5l40.9-7.6c9.7,4.3,20.3,6.8,31.6,6.8c42.8,0,77.6-34.7,77.6-77.6
			c0-42.8-34.7-77.6-77.6-77.6c-42.8,0-77.6,34.7-77.6,77.6c0,15.1,4.4,29.2,11.9,41.1L78.8,217.5z"
            />
            <path
              id="XMLID_133_"
              fill="none"
              stroke="#DBAF40"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              d="M78.8,217.5l40.9-7.6
			c9.7,4.3,20.3,6.8,31.6,6.8c42.8,0,77.6-34.7,77.6-77.6c0-42.8-34.7-77.6-77.6-77.6c-42.8,0-77.6,34.7-77.6,77.6
			c0,15.1,4.4,29.2,11.9,41.1L78.8,217.5z"
            />
            <ellipse
              id="XMLID_132_"
              fill="none"
              cx="151.4"
              cy="139.6"
              rx="58.5"
              ry="59.9"
            />

            <circle
              id="XMLID_128_"
              fill="none"
              stroke="none"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              cx="188.6"
              cy="141.6"
              r="9.7"
            />
            <circle
              id="XMLID_127_"
              fill="none"
              stroke="none"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              cx="149.9"
              cy="141.6"
              r="9.7"
            />
            <circle
              id="XMLID_122_"
              fill="none"
              stroke="none"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              cx="111.1"
              cy="141.6"
              r="9.7"
            />
          </g>
        </svg>
        <article>
          <p>
            "In web dev, you are not going where no one has gone before. You are
            travelling a well-worn path of, inspired innovation and creativity."
          </p>
          <p>
            <span>Lorelle VanFossen</span>
          </p>
        </article>
        </div>
        <div>
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
        </div>
      </Wrapper>
    );
  }
}

export default SectionContact;
