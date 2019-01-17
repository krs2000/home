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
width:35vw;
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
    .svg{
    width:22vw;
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
		<rect x="41.5" y="41.7" fill="#DBAF40" width="12.8" height="4.4"/>
	</g>
	<g id="XMLID_800_">
		<path fill="#DBAF40" d="M237,209.4H21c-4.3,0-7.9-3.5-7.9-7.9V49.4c0-4.3,3.5-7.9,7.9-7.9h13.7v4.4H21c-1.8,0-3.5,1.5-3.5,3.5
			v152.1c0,1.8,1.5,3.5,3.5,3.5h216c1.8,0,3.5-1.5,3.5-3.5V49.4c0-1.8-1.5-3.5-3.5-3.5H60.6v-4.4H237c4.3,0,7.9,3.5,7.9,7.9v152.1
			C244.9,205.8,241.3,209.4,237,209.4z"/>
	</g>
	<g id="XMLID_798_">
		<path fill="#0E1111" d="M238.7,216.3H16.9c-5.3,0-9.9-3.8-10.8-9.1l-1.5-9.6h102.8l4,5.6h28.4l4.3-5.6h108.3l-1.4,8.4
			C249.9,211.9,244.8,216.3,238.7,216.3z"/>
	</g>
	<g id="XMLID_797_">
		<path fill="#DBAF40" d="M238.7,218.4H16.9c-6.4,0-11.9-4.6-12.9-11l-2-12.2h106.5l4,5.6h26.2l4.3-5.6h111.9l-1.8,11
			C251.9,213.2,245.8,218.4,238.7,218.4z M7.2,199.7l1.2,7.1c0.8,4.3,4.3,7.3,8.5,7.3h221.8c5,0,9.3-3.7,10-8.5l0.9-5.8H145
			l-4.3,5.6H110l-4-5.6H7.2V199.7z"/>
	</g>
	<g id="XMLID_784_">
		<g id="XMLID_794_">
			<line fill="none" x1="69.8" y1="106.8" x2="69.8" y2="102.3"/>
			<line fill="none" x1="189.2" y1="102.3" x2="189.2" y2="106.8"/>
		</g>
		<g id="XMLID_792_">
			<line fill="none" x1="131.6" y1="171.7" x2="127.5" y2="169.9"/>
			<line fill="none" x1="157.3" y1="102" x2="161.4" y2="103.9"/>
		</g>
	</g>
</g>
<path fill="#0686D8" d="M130.1,169.4"/>
<path fill="#0686D8" d="M152,191.2"/>
<path fill="#FAFBFA" d="M58.7,190.7h-4.4V186c0-2.6,1.1-5,2.9-6.8c1.8-1.8,4.3-2.7,6.8-2.7h9.9c1.4-5,3.3-9.9,5.9-14.3l-6.8-7
	c-1.1-1.1-2.1-2.4-2.6-4c-1.1-3.7-0.2-7.5,2.4-9.9l6.2-6.1c1.8-1.8,4.3-2.9,6.8-2.9l0,0c2.6,0,5.2,1.1,7,2.9l7,7
	c4.4-2.6,9.1-4.6,14-5.8v-9.9c0-5.3,4.4-9.7,9.7-9.7h8.7c5.3,0,9.7,4.4,9.7,9.7v9.9c5,1.4,9.9,3.3,14.3,5.9l7-7
	c3.8-3.8,10-3.8,13.8,0l6.1,6.1c1.1,1.1,2.1,2.4,2.6,4c1.1,3.7,0.2,7.5-2.4,9.9l-7,7c2.6,4.4,4.6,9.3,5.9,14.3h10
	c5.3,0,9.7,4.4,9.7,9.7v4.3h-4.4v-4.3c0-2.9-2.4-5.3-5.3-5.3H179l-0.5-1.7c-1.4-5.8-3.5-11.3-6.7-16.1l-0.9-1.5l9.6-9.6
	c1.1-1.1,1.5-2.4,1.5-3.8c0-1.4-0.6-2.7-1.5-3.8l-6.2-6.2c-2.1-2.1-5.5-2.1-7.6,0l-9.6,9.4l-1.5-0.9c-5-3.2-10.3-5.3-16.1-6.7
	l-1.7-0.5v-13.4c0-2.9-2.4-5.3-5.3-5.3h-8.8c-2.9,0-5.3,2.4-5.3,5.3v13.4l-1.7,0.5c-5.6,1.2-11,3.5-16,6.5l-1.5,0.9l-9.4-9.6
	c-1.1-1.1-2.4-1.5-3.8-1.5l0,0c-1.4,0-2.7,0.6-3.8,1.5l-6.2,6.2c-1.1,1.1-1.5,2.3-1.5,3.8c0,1.4,0.6,2.7,1.5,3.8l9.4,9.6l-0.9,1.5
	c-3.2,4.9-5.5,10.3-6.7,16.1l-0.5,1.7H63.9c-1.4,0-2.7,0.5-3.8,1.5c-1.1,1.1-1.5,2.4-1.5,3.8L58.7,190.7z M154.6,190.6h-4.4
	c0-12-9.7-21.8-21.8-21.8s-21.8,9.7-21.8,21.8h-4.4c0-14.4,11.7-26.2,26.2-26.2C142.8,164.6,154.6,176.3,154.6,190.6z"/>
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
