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

svg{
height:30vh;
width:25vw;
opacity: 0.9;
}
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
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 260 260">
<g id="XMLID_783_">
	<g id="XMLID_801_">
		<rect x="78.6" y="71.9" fill="#DBAF40" width="8.4" height="2.9"/>
	</g>
	<g id="XMLID_800_">
		<path fill="#DBAF40" d="M207.1,182.2h-142c-2.8,0-5.2-2.3-5.2-5.2V77c0-2.8,2.3-5.2,5.2-5.2h9v2.9h-9c-1.2,0-2.3,1-2.3,2.3v100
			c0,1.2,1,2.3,2.3,2.3h142c1.2,0,2.3-1,2.3-2.3V77c0-1.2-1-2.3-2.3-2.3h-116v-2.9h116c2.8,0,5.2,2.3,5.2,5.2v100
			C212.3,179.8,209.9,182.2,207.1,182.2z"/>
	</g>
	<g id="XMLID_798_">
		<path fill="#0E1111" d="M208.2,186.7H62.4c-3.5,0-6.5-2.5-7.1-6l-1-6.3h67.6l2.6,3.7h18.7l2.8-3.7h71.2l-0.9,5.5
			C215.6,183.8,212.2,186.7,208.2,186.7z"/>
	</g>
	<g id="XMLID_797_">
		<path fill="#DBAF40" d="M208.2,188.1H62.4c-4.2,0-7.8-3-8.5-7.2l-1.3-8h70l2.6,3.7h17.2l2.8-3.7h73.6l-1.2,7.2
			C216.9,184.7,212.9,188.1,208.2,188.1z M56,175.8l0.8,4.7c0.5,2.8,2.8,4.8,5.6,4.8h145.8c3.3,0,6.1-2.4,6.6-5.6l0.6-3.8h-68.8
			l-2.8,3.7h-20.2l-2.6-3.7H56z"/>
	</g>
	<g id="XMLID_784_">
		<g id="XMLID_794_">
			<line fill="#0686D8" x1="97.2" y1="114.7" x2="97.2" y2="111.8"/>
			<line fill="#0686D8" x1="175.7" y1="111.8" x2="175.7" y2="114.7"/>
		</g>
		<g id="XMLID_792_">
			<line fill="#0686D8" x1="137.8" y1="157.4" x2="135.1" y2="156.2"/>
			<line fill="#0686D8" x1="154.7" y1="111.6" x2="157.4" y2="112.8"/>
		</g>
	</g>
</g>
<path fill="#0686D8" d="M136.8,155.9"/>
<path fill="#0686D8" d="M151.2,170.2"/>
<path fill="#DBAF40" d="M89.9,169.9l-2.9,0l0-3.1c0-1.7,0.7-3.3,1.9-4.5c1.2-1.2,2.8-1.8,4.5-1.8l6.5,0c0.9-3.3,2.2-6.5,3.9-9.4
	l-4.5-4.6c-0.7-0.7-1.4-1.6-1.7-2.6c-0.7-2.4-0.1-4.9,1.6-6.5l4.1-4c1.2-1.2,2.8-1.9,4.5-1.9h0c1.7,0,3.4,0.7,4.6,1.9l4.6,4.6
	c2.9-1.7,6-3,9.2-3.8v-6.5c0-3.5,2.9-6.4,6.4-6.4h5.7c3.5,0,6.4,2.9,6.4,6.4v6.5c3.3,0.9,6.5,2.2,9.4,3.9l4.6-4.6
	c2.5-2.5,6.6-2.5,9.1,0l4,4c0.7,0.7,1.4,1.6,1.7,2.6c0.7,2.4,0.1,4.9-1.6,6.5l-4.6,4.6c1.7,2.9,3,6.1,3.9,9.4l6.6,0
	c3.5,0,6.4,2.9,6.4,6.4v2.8h-2.9V167c0-1.9-1.6-3.5-3.5-3.5l-8.8,0l-0.3-1.1c-0.9-3.8-2.3-7.4-4.4-10.6l-0.6-1l6.3-6.3
	c0.7-0.7,1-1.6,1-2.5c0-0.9-0.4-1.8-1-2.5l-4.1-4.1c-1.4-1.4-3.6-1.4-5,0l-6.3,6.2l-1-0.6c-3.3-2.1-6.8-3.5-10.6-4.4l-1.1-0.3v-8.8
	c0-1.9-1.6-3.5-3.5-3.5h-5.8c-1.9,0-3.5,1.6-3.5,3.5v8.8l-1.1,0.3c-3.7,0.8-7.2,2.3-10.5,4.3l-1,0.6l-6.2-6.3c-0.7-0.7-1.6-1-2.5-1
	h0c-0.9,0-1.8,0.4-2.5,1l-4.1,4.1c-0.7,0.7-1,1.5-1,2.5c0,0.9,0.4,1.8,1,2.5l6.2,6.3l-0.6,1c-2.1,3.2-3.6,6.8-4.4,10.6l-0.3,1.1
	l-8.8,0c-0.9,0-1.8,0.3-2.5,1c-0.7,0.7-1,1.6-1,2.5L89.9,169.9z M152.9,169.8H150c0-7.9-6.4-14.3-14.3-14.3
	c-7.9,0-14.3,6.4-14.3,14.3h-2.9c0-9.5,7.7-17.2,17.2-17.2C145.2,152.7,152.9,160.4,152.9,169.8z"/>
</svg>
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
