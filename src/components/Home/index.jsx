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
import color from '../../constants.js'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import ReactDOM from 'react-dom'
import Swipe from 'react-easy-swipe'
const ParallaxStyled = styled(Parallax) `

  background:${color.dark}`

  const ParallaxImage = styled.div `
z-index:5`


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
        scroll: 1,
        index: 1
      }, {
        name: 'projects',
        route: '#projects',
        scroll: 2,
        index: 2
      }, {
        name: 'about',
        route: '#about',
        scroll: 3,
        index: 3
      }, {
        name: 'contact',
        route: '#contact',
        scroll: 4,
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
    this.scroll = false
    this.prev = 0
  }


  componentWillReceiveProps(nextProps) {
    if ( nextProps.location.hash !== this.props.location.hash) {
  // this.parralax.current.scrollTo(this.state.options.filter(x => x === nextProps.location.hash).index)    
    }
  }

  componentDidMount() {
        window.addEventListener('DOMMouseScroll', this.handleScroll, false);
    window.onmousewheel =   document.onmousewheel = this.handleScroll;
    axios('https://shark-blog-one.herokuapp.com/api/articles')
      .then((res) => {
        this.setState({ articles: res.data.articles,  active: this.props.location.hash && this.state.options.filter(x => x.route === this.props.location.hash)[0].index })
            //  this.setState({ articles: res.data.articles})
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.active !== this.state.active){
      // let hash = this.props.location.hash.replace('#', '')
      // this.state.options.forEach((t) => {
      //   if ( hash !== undefined && t.name === hash ) {
          this.props.history.push('/#' + this.state.options[this.state.active].name);
          // this.parralax.current.scrollTo(this.state.active)
      //   }
      // })
      var node = ReactDOM.findDOMNode(this.lines.current)
      node.classList.remove('floater')
     setTimeout(()=> node.classList.add('floater'),1000)
  }
  }

    handleScroll = (e) => {
      if(e.type === 'mousewheel'){
      e.stopPropagation();
    let index = this.state.active;
    if (index > 0 && e.deltaY <0 ) {
      index--
    } else if ( index < 4 && e.deltaY > 0) {
      index++
    }
    this.setState({ active: index }, ()=> this.parralax.current.scrollTo(this.state.active));
   }
  }

    onSwipeMove=(position, e) =>{
   
      let index = this.state.active;
    if (index > 0 && position.y  > 0) {
      index--
      // this.props.history.push('/#' + this.state.options[index].name);
    } else if ( index < 4 && position.y  < 0) {
      index++
      // this.props.history.push('/#' + this.state.options[index].name);
    }
     this.setState({ active: index }, ()=> this.parralax.current.scrollTo(this.state.active));
  }



  _handleWaypointEnter = (page, index) => {
    this.setState({ active: index });
  }

  render() {
    const Messanger = styled.div `
    display: ${this.state.active === 4 ? 'block' : 'none'} `
 
    return (
      <Swipe ref={this.wrapper}  onSwipeMove={this.onSwipeMove}>
        <Hamburger active={this.state.active} parralax={this.parralax}  />
        <MenuAside options={this.state.options} active={this.state.active} />
        <ParallaxStyled 
         ref={this.parralax} pages={5}
          effect={(animation, toValue) =>
              Animated.timing(animation, { toValue, duration: 700, easing: Easing.linear })}>
             <Parallax.Layer       
            offset={0}
            speed={.3}      
            >
           <ParallaxImage><img src={Lines}  ref={this.lines} className='floater' alt='lines' /></ParallaxImage> 
          </Parallax.Layer>
          <Parallax.Layer
            offset={0}
            speed={0}
            ref={this.welcome}>
            <SectionWelcome />
          </Parallax.Layer>
          <Parallax.Layer
            offset={1}
            speed={0}
            ref={this.blog} >         
            <SectionBlog articles={this.state.articles} />
          </Parallax.Layer>
          <Parallax.Layer
            offset={2}
            speed={0}
            ref={this.projects}>
            <SectionProjects />
          </Parallax.Layer> 
          <Parallax.Layer
            offset={3}
            speed={0}
            ref={this.about} >
            <SectionAbout />
          </Parallax.Layer>
          <Parallax.Layer
            offset={4}
            speed={0}
            ref={this.contact} > 
            <SectionContact />  
          </Parallax.Layer>
                <Parallax.Layer
                   offset={4}>
       <Messanger><MessengerCustomerChat
            pageId="410114706194481"
            appId="2201094929903504"
            htmlRef={window.location.pathname}
            themeColor="#dbaf40"
          /></Messanger>   
                   </Parallax.Layer>       
        </ParallaxStyled> 
      </Swipe >
    )
  }
}



export default withRouter(Home)