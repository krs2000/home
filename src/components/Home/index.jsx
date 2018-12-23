import React ,{Component} from 'react';
import { Hamburger,WelcomeSection } from '../'
import styled from 'styled-components';

const  Wrapper = styled.section`
  background:black;
  width:100vw;
  height:100vh;
  `;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <Wrapper>
        <Hamburger/>
        <WelcomeSection/>
      </Wrapper>
    );
  }
}



export default Home;