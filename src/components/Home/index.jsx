import React, { Component } from 'react'
import { Hamburger, SectionWelcome, SectionBlog, SectionContact, SectionProjects, SectionAbout } from '../'
import styled from 'styled-components'
import axios from 'axios'
import Parallax from 'react-springy-parallax'
import Animated from 'animated/lib/targets/react-dom'
import Easing from 'animated/lib/Easing'
import { withRouter } from 'react-router-dom'
import Waypoint from 'react-waypoint'
import img from '../../assets/decoration.jpg'
import LinesDown from '../../assets/linesDown.svg'
import {color} from '../../constants.js'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import Swipe from 'react-easy-swipe'
import IsScrolling from 'react-is-scrolling'

const SwipeStyled = styled(Swipe) `
  background:${color.dark}`

const ParallaxImage = styled.div `
  height:50vh;
div{
overflow:hidden;
}
  #curve {
position:absolute;
bottom:-50vh;
left:0;
  }
  .short{
    opacity:0.1;
  }
`
const ConvertString =(string)=>{
  let newString = string;
  return newString.replace("/", "").toLowerCase();
}

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lastScrollPos: 0,
      articles: [],
      options: [{

        name: 'welcome',
        route: '#welcome',
        scroll: 0,
        index: 0
      }, {
        name: 'blog',
        route: '#blog',
        scroll: 1.6,
        index: 1
      }, {
        name: 'projects',
        route: '#projects',
        scroll: 2.7,
        index: 2
      }, {
        name: 'about',
        route: '#about',
        scroll: 4.2,
        index: 3
      }, {
        name: 'contact',
        route: '#contact',
        scroll: 5.6,
        index: 4
      }],
      active: 0
    }
    this.parralax = React.createRef()
  }



  componentDidMount() {
        window.addEventListener('DOMMouseScroll', this.handleScroll, false);
    window.onmousewheel =   document.onmousewheel = this.handleScroll;
    axios('https://shark-blog-one.herokuapp.com/api/articles')
      .then((res) => {
        this.setState({ articles: res.data.articles})
        window.scroll(0, this.state.options.filter(x=> x.name === ConvertString(this.props.location.pathname))[0].scroll *  window.innerHeight)
      })
  }

  componentWillUpdate(nextProps) {
    if(this.props.location !== nextProps.location){
  window.scroll(0, this.state.options.filter(x=> x.name === ConvertString(nextProps.location.pathname))[0].scroll *  window.innerHeight)
  }
  }

    handleScroll = (e) => {
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
  }

    onSwipeMove=(position, e) =>{
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
   
  }
 onSwipeStart=(e)=> {
    e.stopPropagation();
          e.preventDefault();
  }


  _handleWaypointEnter = (index) => {
    this.props.history.push('/' + this.state.options[index].name)
  }

  render() {
    const Messanger = styled.div `
    .fb_dialog{
       display: ${this.state.active === 4 ? 'inline' : 'none !important'}
       }`
 
    return (
      <SwipeStyled ref={this.wrapper}   
      onSwipeStart={this.onSwipeStart}  onSwipeMove={this.onSwipeMove}>
        <Hamburger active={this.state.active} parralax={this.parralax}  />
            <SectionWelcome active={this.state.active === 0} />
                    <ParallaxImage>
        <svg version="1.1" id="curve" x="0px" y="0px"
	 viewBox="0 0 1960 560" >
<path fill="none" stroke="#09090A" strokeMiterlimit="10" d="M1960,55.4"/>
<line fill="#FAFBFA" stroke="#FAFBFA" strokeMiterlimit="10" x1="-157.3" y1="855.9" x2="-112.3" y2="568.3"/>
<path fill="#FAFBFA" stroke="#FAFBFA" strokeMiterlimit="10" d="M2214.6,572.6"/>
<path fill="#FAFBFA" stroke="#FAFBFA" strokeMiterlimit="10" d="M-112.3,568.3l9-57.5c0,0,756.7-296.1,1110.1-114
	c455.7,234.8,1245.3-780.1,1305.1-495c34.8,165.8-33.9,456.6-97.4,670.8"/>
</svg>    
        </ParallaxImage>    
            <SectionBlog articles={this.state.articles} />
                   <SectionProjects />
                    <ParallaxImage>
<img src={LinesDown} alt='decoration'/>
        </ParallaxImage>    
              <SectionAbout />
 <SectionContact />  
       { this.state.active === 4 ? (<Messanger><MessengerCustomerChat
            pageId="410114706194481"
            appId="2201094929903504"
            htmlRef={window.location.pathname}
            themeColor="#dbaf40"
       /></Messanger>): ''  }
      </SwipeStyled >
    )
  }
}



export default withRouter(IsScrolling(Home))