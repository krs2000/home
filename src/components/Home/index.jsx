import React, { Component } from "react";
import {
  Hamburger,
  SectionWelcome,
  SectionBlog,
  SectionContact,
  SectionProjects,
  SectionAbout
} from "../";
import styled from "styled-components";
import axios from "axios";
import Parallax from "react-springy-parallax";
import Animated from "animated/lib/targets/react-dom";
import Easing from "animated/lib/Easing";
import { withRouter } from "react-router-dom";
import Waypoint from "react-waypoint";
import img from "../../assets/decoration.jpg";
import LinesDown from "../../assets/linesDown.svg";
import LinesUp from "../../assets/linesUp.svg";
import { color ,device} from "../../constants.js";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Swipe from "react-easy-swipe";
import IsScrolling from "react-is-scrolling";

const SwipeStyled = styled(Swipe)`
section {
  padding: 0 12.5%;
  height:100vh;
}
h2{
  padding:5% 0;
  font-size:3rem;
}
@media ${device.laptop} {  
  p{
    font-size:1.5rem;
    
  }
}
section{
  margin-bottom:-2px;
}
`;

const DecorationImage = styled.img`
    margin-bottom: -5px;
`;
const ConvertString = string => {
  let newString = string;
  return newString.replace("/", "").toLowerCase();
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      // options: [
      //   {
      //     name: "welcome",
      //     scroll: 0,
      //     index: 0
      //   },
      //   {
      //     name: "blog",
      //     scroll: 1.6,
      //     index: 1
      //   },
      //   {
      //     name: "projects",
      //     scroll: 2.7,
      //     index: 2
      //   },
      //   {
      //     name: "about",
      //     scroll: 4.2,
      //     index: 3
      //   },
      //   {
      //     name: "contact",
      //     scroll: 5.6,
      //     index: 4
      //   }
      // ],
      active: 0
    };
    this.parralax = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("DOMMouseScroll", this.handleScroll, false);
    window.onmousewheel = document.onmousewheel = this.handleScroll;
    axios("https://shark-blog-one.herokuapp.com/api/articles").then(res => {
      this.setState({ articles: res.data.articles });
      // this.props.location.pathname !== '' &&  window.scroll(0, this.state.options.filter(x=> x.name === ConvertString(this.props.location.pathname))[0].scroll *  window.innerHeight)
    });
  }

  // componentWillUpdate(nextProps) {
  //   if (this.props.location !== nextProps.location) {
  //     window.scroll(
  //       0,
  //       this.state.options.filter(
  //         x => x.name === ConvertString(nextProps.location.pathname)
  //       )[0].scroll * window.innerHeight
  //     );
  //   }
  // }

  handleScroll = e => {
    // e.stopPropagation();
    // e.preventDefault();
    // console.log(window.pageYOffset)
    //   if(e.type === 'mousewheel' ){
    // let index = this.state.active;
    // if (index > 0 && e.deltaY < 0 ) {
    //   index--
    // } else if ( index < 4 && e.deltaY > 0) {
    //   index++
    // }
    //     this.setState({ active: index })
    //   this.setState({ active: index }, ()=> {
    //     // this.parralax.current.scrollTo(this.state.options[this.state.active].scroll)
    //        this.props.history.push( this.state.options[this.state.active].name)})
    //  }
  };

  onSwipeMove = (position, e) => {
    //   e.stopPropagation()
    //   e.preventDefault()
    //   let index = this.state.active
    // if (index > 0 && position.y  > 0) {
    //   index--
    // } else if ( index < 4 && position.y  < 0) {
    //   index++
    // }
    // this.setState({ active: index }, ()=> {
    //   this.parralax.current.scrollTo(this.state.options[this.state.active].scroll)
    //      this.props.history.push('/#' + this.state.options[this.state.active].name)})
  };
  onSwipeStart = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  _handleWaypointEnter = index => {
    this.props.history.push("/" + this.state.options[index].name);
  };

  render() {
    const Messanger = styled.div`
      .fb_dialog {
        display: ${this.state.active === 4 ? "inline" : "none !important"};
        position: absolute:
        bottom:2rem;
        left:12.5vw;
      }
    `;

    return (
      <SwipeStyled
        ref={this.wrapper}
        onSwipeStart={this.onSwipeStart}
        onSwipeMove={this.onSwipeMove}
      >
        <Hamburger active={this.state.active} />
        <SectionWelcome />
        <DecorationImage src={LinesUp} alt="decoration" />
        <SectionBlog articles={this.state.articles} />
        <SectionProjects />
        <DecorationImage src={LinesDown} alt="decoration" />
        <SectionAbout />
        <SectionContact />
    
          <Messanger>
            <MessengerCustomerChat
              pageId="410114706194481"
              appId="2201094929903504"
              htmlRef={window.location.pathname}
              themeColor="#dbaf40"
            />
          </Messanger>
     
      </SwipeStyled>
    );
  }
}

export default withRouter(IsScrolling(Home));
