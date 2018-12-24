import React ,{Component} from 'react';
import { Hamburger,WelcomeSection,BlogSection } from '../'
import styled from 'styled-components';
import axios from 'axios';

const  Wrapper = styled.section`
  background:black;
  width:100%;
  height:100vh;
  `;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles:[]
    };

  }

  componentDidMount() {
    axios('https://shark-blog-one.herokuapp.com/api/articles')
      .then((res) => {
        this.setState({ articles: res.data.articles })

      });
  }

  render() {
    return (
      <Wrapper>
        <Hamburger/>
        <WelcomeSection/>
        <BlogSection articles={this.state.articles}/>
      </Wrapper>
    );
  }
}



export default Home;