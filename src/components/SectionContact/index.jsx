import React ,{Component} from 'react';
import styled from 'styled-components';
import LinkedIn from '../../assets/Linkedin.svg'
import Email from '../../assets/Email.svg'
import color from '../../constants.js'
import { Header } from '../'
const Wrapper = styled.section`
height: 100vh;
width:100%;

color: ${color.light};
  article{
    h3{
  font-weight:100;
}
    fot-weight:100;
  padding:20% 0 0 30%;
  max-width:65vw;
  min-width:180px;
  position: relative;
    font-size: 4vh;
    line-height:4.4vh;
      span{
             font-size:4.1vh;
         
           color: ${color.primary};
        
        }
}
div{
  bottom:1em;
  right:20%;
  position: absolute;
  dispaly:flex;
  align-items:center;
}
img{
  width:7vh;
  margin:2rem;
  cursor:pointer;
  &:hover{
   transform: scale(1.05);
  }
}
a{
  text-decoration:none;
}

  `;



class SectionContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles:[]
    };

  }


  render() {
    return (
      <Wrapper>
        <Header color={color.light} rotate='true' text='Contact'/>
      <article><h3>Hello,</h3><p>Do you wish a <span>new website</span>?</p>
      <p>Are you looking for <span>front-end developer</span> for your projects?</p>
         <p>     Let's work together.  </p> 
                </article>
              <div><a href='https://www.linkedin.com/in/kris-krysiak-3aa83297/' rel="noopener noreferrer" target='_blank'> <img src={LinkedIn} alt="LinkedIn"/></a><a href="mailto:krskry@gmail.com">  <img src={Email} alt="Email"/></a></div>
      </Wrapper>
    );
  }
}



export default SectionContact;