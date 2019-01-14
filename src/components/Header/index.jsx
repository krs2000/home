import React from 'react'
import styled from 'styled-components'
import {color,device} from '../../constants.js'

const Header  = (props) => {
  const  Wrapper = styled.section`
  color: ${ props.color ?  props.color : color.dark };
  letter-spacing:.2rem;
  text-align:end;
  z-index:99;
  text-transform:capitalize;
  font-size:1rem;
  z-index:5;
  cursor: pointer;
  overflow: visible;
  font-weight:900;
  padding:.2rem 5%;
  font-size:2rem;
      @media ${device.laptop} {  
     font-size:5rem;
       padding:1rem;
  }
  svg{
    position:absolute;
    left:0;
    top:12vh;
  }
 `;

  return (<Wrapper>
{props.text === 'xx' && <svg version="1.1" id="Layer_1"  x="0px" y="0px"
	 viewBox="0 0 1000 360" >
<g>
	<g>
		<path fill="#FAFBFA" d="M-20.7,128.1c10.4-7,22.6-10.1,34.5-11.2c14.1-1.3,28.5-1,42.6-0.5c13.7,0.5,27.2,2.7,38.9,9
			c11.8,6.3,21.2,15.2,30.7,24.8c20.3,20.4,39.7,41.7,60.9,61.3c21.6,19.9,44.9,38.3,70.4,52.9c55.3,31.6,126.2,43.1,184.3,12.1
			c6.5-3.5,8.5-12.3,4.8-18.5c-3.8-6.5-12-8.3-18.5-4.8c-46.9,25-105,15.5-151-8.8c-51-27-89.9-70.1-129.6-110.9
			c-11.2-11.5-23.2-22.5-37-30.6c-15.4-9-32.7-12.3-50.3-13.3c-15.8-0.9-32.1-1-47.9,0.5c-16.4,1.5-32.7,5.5-46.5,14.7
			c-6.1,4.1-8.7,11.8-4.8,18.5C-35.7,129.3-26.9,132.2-20.7,128.1L-20.7,128.1z"/>
	</g>
</g>
<g>
	<g>
		<path fill="#FAFBFA" d="M581.5,174.5c17.4,0,17.4-27,0-27S564.1,174.5,581.5,174.5L581.5,174.5z"/>
	</g>
</g>
</svg>}
 <h2>{props.text}</h2> 
</Wrapper>)
}

export default Header;