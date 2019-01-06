import React from 'react';
import styled from 'styled-components';
import img from '../../assets/decoration.jpg';
import Swipeable from 'react-swipeable'
import { Header } from '../'

const Wrapper = styled.section`
height: 100vh;
width:100%;
padding-left:10%;
background: white;
position: relative;
display:flex;
justify-content:center;
align-items:center;
  `;

const SwipeBlog = styled.section`
  height: 70vh;
  width:60vw;
display:flex;
justify-content: space-around;
img{
  max-width:70vw;
}
    `;
const swipingLeft = () => {
}

const swipingRight = () => {
}

const ExampleSlider = (articles) => (
  <Swipeable
    onSwipingLeft={swipingLeft}
    onSwipingRight={swipingRight}
  >
    <SwipeBlog>
      {articles.slice(0, 1).map((article) => returnArticles(article))}
    </SwipeBlog>
  </Swipeable>
);


const returnArticles = (article) => {
  return (
    <div key={`article-${article._id}`}>
        <h4>{article.title}</h4>
        <p>{article.body}</p>
      <img className="card__image" src="https://source.unsplash.com/category/nature/400x260" alt="blog" />
      <div className="card__copy">
      </div>

    </div>)
}


const SectionBlog = (props) => {
  return (<Wrapper>
    {/* <Header text='Blog' /> */}
    {ExampleSlider(props.articles)}
  </Wrapper>)
}


export default SectionBlog;
