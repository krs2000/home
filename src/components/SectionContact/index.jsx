import React ,{Component} from 'react';
import styled from 'styled-components';
import LinkedIn from '../../assets/Linkedin.svg'
import Email from '../../assets/Email.svg'
import {color, device} from '../../constants.js'
import { Header } from '../'
const Wrapper = styled.section`
name{
  font-size:1.2rem;
}
height:100vh;
font-style: italic;
letter-spacing: .05rem;
color: ${color.light}
      span{         
           color: ${color.primary};
        
        }
}
position:relative;
div{
position:absolute;
bottom:7%;
left:10%;
  width:80%;
  dispaly:flex;
  align-items:center;
}
img{
  width:7vh;
  margin:2rem 1rem 1rem 1rem;
  cursor:pointer;
  &:hover{
   transform: scale(1.05);
  }
}
a{
  text-decoration:none;
}
article{
  padding:0 30% 0 10%;

}
p,h3{
  margin:0.2rem 0;
}
font-size:1.2rem;
      @media ${device.laptop} {  
      font-size:2rem;
       padding:1rem;
       p,h3{
        margin:0.4rem 0;
      }
       article{
  padding:5% 25%;
}
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

      <article><p><span>In web dev, you are not going where no one has gone before.</span>  You are travelling a well-worn path of, inspired innovation and creativity.</p>
      <name>Lorelle VanFossen</name>
                </article>
                
              <div><a href='https://www.linkedin.com/in/kris-krysiak-3aa83297/' rel="noopener noreferrer" target='_blank'> <img src={LinkedIn} alt="LinkedIn"/></a><a href="mailto:krskry@gmail.com">  <img src={Email} alt="Email"/></a></div>
      </Wrapper>
    );
  }
}



export default SectionContact;