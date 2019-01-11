import React from 'react';
import styled from 'styled-components';
import color from '../../constants.js'
import { Header } from '../'



const SectionAbout = (props) => {
  const Wrapper = styled.section`
height: 100vh;
width:100%;
position: relative;
color: ${color.light};
overflow: hidden;
padding:20% 0 0 25%;
div{
  width:70%;
  h3{
    color: ${color.light};
    font-size:3.2vh;
    text-align:start;
    margin:1vh 0 .1vh 0;
  }
  span{
    color: ${color.primary};
    font-size:3vh;
    width:70%;
    margin:0.1vh 0 1vh 0;
    text-align:start;
    word-wrap:wrap;
  }
}
  `;

  return (<Wrapper>
    <Header color={color.light} rotate='true' text='About'/>
    <div>
    <h3>Front-end development</h3>
        <span >Well written JS, HTML and CSS can make your ideas happen.</span> 
         <h3 >Responsive Design</h3>
        <span >No matter the device, your website will shine.</span>
        <h3 >Advanced  frameworks</h3>
        <span >Angular, React.js, Angular.js and willing to practise Vue.js</span> 
     <h3 >Advanced animations</h3>
<span >Animations that can make your website alive.</span>
   <h3 >Wordpress & Woocomerce development</h3>
     <span >Most advanced extensions and plugins can make a difference.</span>
   </div>
  </Wrapper>)
}


export default SectionAbout;
