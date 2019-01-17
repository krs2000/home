import React from "react";
import Swipeable from "react-swipeable";
import styled from "styled-components";
import img from "../../assets/decoration.jpg";
import { color, device } from "../../constants.js";
import { Header, Arrow } from "../";

const Arrows = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  div {
    cursor: pointer;
  }
`;
const Wrapper = styled.section`
  background: ${color.light};
  display:flex;
  flex-direction:column;
  justify-content: space-around;
`;

const SwipeBlog = styled.div`
  .blog_item {
  width:auto;
  position:relative;
  background-color: ${color.dark};
 
    img {
      min-height:55vh;
       max-height:60vh;
      max-width: 100%;
      min-width: 60vw;
      position:relative;
      width: 100%;
      height: 100%;
      opacity: 0.40;
      -moz-opacity: 40%;
      -webkit-opacity: 40%;
 

    }
    h4{
      position:absolute;
      color:${color.primary};
      top:10%;
      left:20%;
      font-size:10wv;
      opacity:1;
      z-index:1;
    }
    p{
      position:absolute;
      color:${color.light}
      top:30%;
      left:20%;
      font-size:1em;
      opacity:1;
      z-index:1;

    }

  }
`;
const SwipeableStyled = styled(Swipeable)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const returnArticles = article => {
  return (
    <div className="blog_item" key={`article-${article._id}`}>
      <h4>{article.title}</h4>
      <p>{article.body}</p>
      <img
        className="card__image"
        src="https://source.unsplash.com/category/nature/400x260"
        alt="blog"
      />
      <div className="card__copy" />
    </div>
  );
};

class SectionBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipe: 0
    };
  }

  swipingLeft = () => {
    let newSwipe = this.state.swipe;
    newSwipe--;
    if (newSwipe >= 0) this.setState({ swipe: newSwipe });
  };

  swipingRight = () => {
    let newSwipe = this.state.swipe;
    newSwipe++;
    if (newSwipe < this.props.articles.length)
      this.setState({ swipe: newSwipe });
  };

  render() {
    return (
      <Wrapper>
        <Header color={color.dark} text="Blog" />
        <SwipeableStyled
          onSwipingLeft={() => this.swipingLeft()}
          onSwipingRight={() => this.swipingRight()}
        >
          <SwipeBlog>
            {this.props.articles
              .slice(this.state.swipe, this.state.swipe + 1)
              .map(article => returnArticles(article))}
          </SwipeBlog>
        </SwipeableStyled>
        <Arrows>
          <div className="left" onClick={() => this.swipingLeft()}>
            <Arrow left />
          </div>
          <div className="right" onClick={() => this.swipingRight()}>
            <Arrow />
          </div>
        </Arrows>
      </Wrapper>
    );
  }
}
export default SectionBlog;
