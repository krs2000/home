import React from 'react';
import styled from 'styled-components';
import { Header } from '../'
// import Delayed from '../Delayed';




const SectionAbout = (props) => {
  const Wrapper = styled.section`
height: 100vh;
width:100%;

position: relative;
color:white;

div{
  margin:5%
  margin-left:25%;
  width:70%;
  display:flex;
  flex-direction:column;
  align-items:center;
  h3{
    width:70%;
    text-align:start;
  }
  p{
    width:70%;
    text-align:start;
  }
}
  `;

  return (<Wrapper>
    {/* <Header text='About' color='white' /> */}
    <div>
    <h3 >FRONT-END DEVELOPMENT</h3>
        <p >Well written JS, HTML and CSS can make your ideas happen.</p> 
         <h3 >RESPONSIVE DESIGN</h3>
        <p >No matter the device, your website will shine.</p>
       <h3 >WORDPRESS DEVELOPMENT</h3>
     {/* <p >Most advanced extensions and plugins can make a difference.</p>
  <h3 >WOOCOMMERCE DEVELOPMENT</h3>
      <p >E-commerce is on the rise.</p>
     <h3 >ADVANCED ANIMATIONS</h3>
<p >Animations that can make your website alive.</p>
   <h3 >ACCESSIBILITY & SEMANTICS</h3>
   <p >Usability to make your website up to standards.</p> */}
   </div>
  </Wrapper>)
}


export default SectionAbout;
