import React from 'react';
import styled from 'styled-components';
import color from '../../constants.js'




const SectionAbout = (props) => {
  const Wrapper = styled.section`
height: 100vh;
width:100%;
position: relative;
color: ${color.light};
overflow: hidden;
padding:25% 0 0 25%;
div{
  width:70%;
  h3{
    color: ${color.light};
    font-size:2.5vh;
    text-align:start;
    margin:1vh 0 .1vh 0;
  }
  span{
    color: ${color.primary};
    font-size:2.2vh;
    width:70%;
    margin:0.1vh 0 1vh 0;
    text-align:start;
    word-wrap:wrap;
  }
}
  `;

  return (<Wrapper>
    <div>
    <h3>Front-end development</h3>
        <span >Well written JS, HTML and CSS can make your ideas happen.</span> 
         <h3 >Responsive Design</h3>
        <span >No matter the device, your website will shine.</span>
        <h3 >Advanced  frameworks</h3>
        <span >Angular, React.js, Angular.js and willing to practise Vue.js</span> 
       <h3 >Wordpress development</h3>
     <span >Most advanced extensions and plugins can make a difference.</span>
  <h3 >Woocomerce development</h3>
      <span >E-commerce is on the rise.</span>
     <h3 >Advanced animations</h3>
<span >Animations that can make your website alive.</span>
   <h3 >Accessibility & Semantics</h3>
   <span>Usability to make your website up to standards.</span>
   </div>
  </Wrapper>)
}


export default SectionAbout;
