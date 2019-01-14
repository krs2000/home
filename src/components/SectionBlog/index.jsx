import React from 'react';
import img from '../../assets/decoration.jpg';
import Swipeable from 'react-swipeable'
import {color, device} from '../../constants.js'
import { Header, Arrow } from '../'
import styled from 'styled-components';

const Arrows = styled.section`
width:100%;
height:3rem;
display:flex;
justify-content:center;
  @media ${device.laptop} {  
.left{
position:absolute;
top:60vh;
left:15vw;
}
.right{
position:absolute;
top:60vh;
right:15vw;
}
    }
div{
  cursor:pointer;
}
  `;
const Wrapper = styled.section`
height: 100vh;

padding:13vh 0;
background: ${color.light};
position: relative;
  `;

const SwipeBlog = styled.section`
  height: 60vh;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  .blog_item{
max-width:60%;
    //   min-width:280px;
  }
  img{
  max-width:60vw;
  //    min-width:260px;
  // max-height:40vh;
}
h4{
  text-align:center;
}
    `;



const returnArticles = (article) => {
  return (
    <div className='blog_item' key={`article-${article._id}`}>
        <h4>{article.title}</h4>
        <p>{article.body}</p>
      <img className="card__image" src="https://source.unsplash.com/category/nature/400x260" alt="blog" />
      <div className="card__copy">
      </div>

    </div>)
}


class SectionBlog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      swipe: 0
    };
  }

swipingLeft = () => {
  let newSwipe = this.state.swipe
  newSwipe--
  if(newSwipe >= 0)
  this.setState({ swipe: newSwipe })
  }

swipingRight = () => {
  let newSwipe = this.state.swipe 
  newSwipe++
  if(newSwipe < this.props.articles.length)
  this.setState({ swipe: newSwipe})
  }

  render(){
  return (<Wrapper>
  <Header color={color.dark}  text='Blog'/>
  <Swipeable
    onSwipingLeft={()=>this.swipingLeft()}
    onSwipingRight={()=>this.swipingRight()}
  >
  <SwipeBlog>
      {this.props.articles.slice(this.state.swipe,this.state.swipe + 1).map((article) => returnArticles(article))}
      </SwipeBlog>
  </Swipeable>
     <Arrows><div className='left' onClick={()=>this.swipingLeft()}><Arrow left /></div>
    <div className='right' onClick={()=>this.swipingRight()}><Arrow /></div></Arrows>
  </Wrapper>)
}
}
export default SectionBlog;
