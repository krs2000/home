import React ,{Component} from 'react';
import { Header } from '../'
import styled from 'styled-components';

// import Lines from '../../assets/lines.svg'

const Wrapper = styled.section`
height: 100vh;
width:100%;

// background-size: cover;
position: relative;
color:white;
div{
  margin:5%
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
            {/* <Header text='Contact' color='white' /> */}
      <div><p>Hello,Do you wish a new website?
        or mayebe you are looking for a front-end developer for your project?
        Feel free to contact me and let do work together....
                
                
                </p></div>
      {/* <img src={Lines} alt='decoration'/> */}
      </Wrapper>
    );
  }
}



export default SectionContact;