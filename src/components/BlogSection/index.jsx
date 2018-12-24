import React from 'react';
import styled from 'styled-components';
import img from '../../assets/decoration.jpg';
import Swipeable from 'react-swipeable'
import { Header } from '../'

const Wrapper = styled.section`
height: 100vh;
width:100%;
background: white;
position: relative;
  `;

const SwipeBlog = styled.section`
  height: 100vh;
  width:100%;
display:flex;
justify-content: space-around;
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
      <img className="card__image" src="https://source.unsplash.com/category/nature/400x260" alt="blog" />
      <div className="card__copy">
        <h4>{article.title}</h4>
        <p>{article.body}</p>
      </div>

    </div>)
}


const BlogSection = (props) => {
  return (<Wrapper>
    <Header text='Blog' />
    {ExampleSlider(props.articles)}
  </Wrapper>)
}


export default BlogSection;
