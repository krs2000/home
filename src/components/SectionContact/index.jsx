import React ,{Component} from 'react';
import styled from 'styled-components';
import LinkedIn from '../../assets/Linkedin.svg'
import Email from '../../assets/Email.svg'


const Wrapper = styled.section`
height: 100vh;
width:100%;
position: relative;
color:white;
  article{
    margin:30% 5% 5% 30%;
    width:65%;
    position: relative;
    font-size: 4vh;
    line-height:4.4vh;
          ::first-letter {
            font-size:4.4vh;
          font-weight: 600;
          color: #dbaf40;
          text-transform: uppercase;
             }  
}
div{
  margin:20vh 15vw;
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
      
      <article>If you wish a new website, or you are looking for front-end developer for your projects, feel free to contact me.
              Let's work together !        
                </article>
              <div><a href='https://www.linkedin.com/in/kris-krysiak-3aa83297/' rel="noopener noreferrer" target='_blank'> <img src={LinkedIn} alt="LinkedIn"/></a><a href="mailto:krskry@gmail.com">  <img src={Email} alt="Email"/></a></div>
      </Wrapper>
    );
  }
}



export default SectionContact;