import React, { Component } from 'react'
import { Hamburger, SectionWelcome, SectionBlog, SectionContact, SectionProjects, SectionAbout, MenuAside } from '../'
import styled from 'styled-components'
import axios from 'axios'
import Parallax from 'react-springy-parallax'
import Animated from 'animated/lib/targets/react-dom'
import Easing from 'animated/lib/Easing'
import { withRouter } from 'react-router-dom'
import Waypoint from 'react-waypoint'
import img from '../../assets/decoration.jpg'
import Lines from '../../assets/lines.svg'
import LinesUp from '../../assets/linesUp.svg'
import LinesDown from '../../assets/linesDown.svg'
import ShapesBottom from '../../assets/ShapesBottom.svg'
import color from '../../constants.js'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import ReactDOM from 'react-dom'
import Swipe from 'react-easy-swipe'
import IsScrolling from 'react-is-scrolling';
const ParallaxStyled = styled(Parallax) `

  background:${color.dark}`

  const ParallaxImage = styled.div `
div{
overflow:hidden;
}
  img {
  opacity:1;
  }
  .short{
    opacity:0.1;
  }
`


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
        scroll: 1.4,
        index: 1
      }, {
        name: 'projects',
        route: '#projects',
        scroll: 2.4,
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
    this.lines = React.createRef()
    this.wrapper = React.createRef()
    this.welcome = React.createRef()
    this.blog = React.createRef()
    this.projects = React.createRef()
    this.about = React.createRef()
    this.contact = React.createRef()
  }



  componentDidMount() {
        window.addEventListener('DOMMouseScroll', this.handleScroll, false);
    window.onmousewheel =   document.onmousewheel = this.handleScroll;
    axios('https://shark-blog-one.herokuapp.com/api/articles')
      .then((res) => {
        this.setState({ articles: res.data.articles,  active: this.props.location.hash && this.state.options.filter(x => x.route === this.props.location.hash)[0].index })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.active !== this.state.active){
          this.parralax.current.scrollTo(this.state.active)
      var node = ReactDOM.findDOMNode(this.lines.current)
  }
  }

    handleScroll = (e) => {
  //     e.stopPropagation();
  //     e.preventDefault();    
  //     console.log(document)       
  //     if(e.type === 'mousewheel' ){
  //   let index = this.state.active;
  //   if (index > 0 && e.deltaY < 0 ) {
  //     index--
  //   } else if ( index < 4 && e.deltaY > 0) {
  //     index++
  //   }  
  //   this.setState({ active: index }, ()=> {
  //     this.parralax.current.scrollTo(this.state.options[this.state.active].scroll)
  //        this.props.history.push('/#' + this.state.options[this.state.active].name)})
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


  _handleWaypointEnter = (page, index) => {
    this.setState({ active: index });
  }

  render() {
    const Messanger = styled.div `
    .fb_dialog{
       display: ${this.state.active === 4 ? 'inline' : 'none !important'}
       }`
 
    return (
      <Swipe ref={this.wrapper}   
      
      onSwipeStart={this.onSwipeStart}  onSwipeMove={this.onSwipeMove}>
        <Hamburger active={this.state.active} parralax={this.parralax}  />
        <ParallaxStyled 
         ref={this.parralax} pages={6.6}
          effect={(animation, toValue) =>
              Animated.timing(animation, { toValue, duration: 1500, easing: Easing.linear })}>
          <Parallax.Layer       
            offset={1}
            speed={.3}      
            >
        <ParallaxImage><img src={LinesUp}  ref={this.lines} className='' alt='lines' /></ParallaxImage> 
        
          </Parallax.Layer>
          <Parallax.Layer       
            offset={2.7}
            speed={.1}      
            >
        <ParallaxImage><div><img src={LinesDown}  ref={this.lines} className='' alt='lines' /></div></ParallaxImage> 
        
          </Parallax.Layer>
          <Parallax.Layer
            offset={0}
            speed={0}
            ref={this.welcome}>
            <SectionWelcome active={this.state.active === 0} />
          </Parallax.Layer>
          <Parallax.Layer
            offset={1.4}
            speed={0}
            ref={this.blog} >         
            <SectionBlog articles={this.state.articles} />
          </Parallax.Layer>
          <Parallax.Layer
            offset={2.4}
            speed={0}
            ref={this.projects}>
            <SectionProjects />
          </Parallax.Layer> 
          <Parallax.Layer
            offset={4.2}
            speed={0}
            ref={this.about} >
            <SectionAbout />
          </Parallax.Layer>
          <Parallax.Layer
            offset={5.6}
            speed={0}
            ref={this.contact} > 
           <Waypoint
  onEnter={()=>this._handleWaypointEnter('contact',4)}
/> <SectionContact />  
          </Parallax.Layer>           
        </ParallaxStyled> 
       { this.state.active === 4 ? (<Messanger><MessengerCustomerChat
            pageId="410114706194481"
            appId="2201094929903504"
            htmlRef={window.location.pathname}
            themeColor="#dbaf40"
       /></Messanger>): ''  }

      </Swipe >
    )
  }
}



export default withRouter(IsScrolling(Home))