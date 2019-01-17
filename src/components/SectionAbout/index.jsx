import React from "react";
import styled from "styled-components";
import { color, device } from "../../constants.js";
import { Header } from "../";
import lookUp from "../../assets/lookUp.svg";
import arrowUp from "../../assets/arrowUp.svg";

const Wrapper = styled.section`
color: ${color.light}
display:flex;
flex-direction:column;
justify-content: space-around;

    img{
      height: 1rem;
    }
    p{
      letter-spacing:.1rem;
      cursor: pointer;
      display:flex;
      justify-content:space-between;
    }
    @media ${device.laptop} {
      p{
        max-width:700px;
      }
    }
    .container{
    height:50vh;
     bottom:20vh;
     left:12.5vw;
    }
    .row{
    
    }
}
  `;

class SectionAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          header: `Front-end development`,
          text: `Well written JS, HTML and CSS can make your ideas happen.`
        },
        {
          header: `Responsive Design`,
          text: `No matter the device, your website will shine.`
        },
        {
          header: `Advanced  frameworks`,
          text: `Angular, React.js, Angular.js and willing to practise Vue.js.`
        },
        {
          header: `Advanced animations`,
          text: `Animations that can make your website alive.`
        },
        {
          header: `Wordpress`,
          text: `Most advanced extensions and plugins can make a difference.`
        }
      ],
      active: undefined
    };
  }
  componentWillMount() {
    this.setState({ active: undefined });
  }

  // componentWillUnmount = () => {

  //   };
  handleClick = index => {
    index !== this.state.active
      ? this.setState({ active: index })
      : this.setState({ active: undefined });
  };

  render() {
    return (
      <Wrapper>
        <Header color={color.light} rotate="true" text="About" />
        <div className='container'>
        {this.state.options.map((option, index) => (
          <div className='row' key={`about-${index}`}>
            {" "}
              <p onClick={() => this.handleClick(index)}>
                {option.header}
                <img
                  src={this.state.active === index ? arrowUp : lookUp}
                  alt="typehead"
                />
               
              </p>
              {this.state.active === index && <p>{option.text}</p>}
          </div>
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default SectionAbout;
