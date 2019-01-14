import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {color, device} from '../../constants.js'
import { ProjectLink,Header,Arrow } from '../'
import Cba from '../../assets/cba.png'
import Ob from '../../assets/ob.png'
import Inwedo from '../../assets/inwedo.png'
import Swipeable from 'react-swipeable'
const Arrows = styled.section`
position:relative;
width:100%;
height:3rem;
display:flex;
justify-content:center;
  @media ${device.laptop} {  
.left{
position:absolute;
top:-25vh;
left:15vw;
}
.right{
position:absolute;
top:-25vh;
right:15vw;
}
    }

div{
  cursor:pointer;
}
  `;
const Wrapper = styled.section`
background:${color.light};
height:100vh;
width:100%;
  `;
const Box= styled.div`
  position:relative;
  min-height:88px;
  z-index:0;

          @media ${device.laptop} {  
  padding-left:calc(90% - 250px);
    }
  span{

   width:100%;
      display:block;
      box-sizing: border-box;
      padding:1rem 3rem;
      text-decoration:none;
      font-size:1rem;
      line-height:2rem;
      font-weight:500;
      letter-spacing:.4rem;
     color:${color.dark};
      text-align:center;
      background:none;
      cursor:pointer;
      z-index:15;
      transition: all .7s ease-out;
   
      &.active{
        color:${color.light};
      }
   
        @media ${device.laptop} {  
     font-size:1.5rem;
       padding:1rem;
              width:250px; 
                font-size: 1.1rem;
    }
  }
    `;
    const Bg= styled.div`
&:before{
content:'';
width: 60%;
border-radius:10rem;
background:${color.dark};
        @media ${device.laptop} {  
              width:250px; 
left: calc(90% - 250px);
    }
    left: 20%;
height: 2.6rem;
position: absolute;
top: .8rem;
transition: transform .6s ease-out;
z-index:-1;
${ props => !props.firstCard  && css`transform: translate(0, 4rem);`};
}
`

const ProjectRowBox = styled.div`
    padding:5% ;
    z-index:-1;
    height:100%;
    transition: all 0.6s;
}`

class SectionProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCard: true,
      swipe: 0,
      personal:[
        {       index: 3,
           page:'https://cool-beer-app.herokuapp.com/' ,
           image:Cba,
           title:'Crafted beers app v0.1'},
                   {
                      index: 4,   
          page:'https://invest-jar.herokuapp.com/' ,
          name:'Invest Jar',
            title:'Investing app v0.1'},
                   
      ],
        commercial:[{
         index: 0,
                    page:'http://www.offbeatmotion.tv/' ,
           image:Ob,
              personal:false,
           title:'Filming Agency'},
                   {    index: 1,
                    page:'https://clickdesign.pl/' ,
                      personal:false,
           name:'Clickdesign',
           title:'Web Agency'},
                   {    index: 2,
                    page:'http://www.inwedo.com/' ,
                      personal:false,
           image:Inwedo,
           title:'Software house'},
      ]
    };
  }

  change = (type) => {
    if(type){
    this.setState({ firstCard: type, swipe: 0})}
    else{
    this.setState({ firstCard: type, swipe: 3})}
  }

  swipingLeft = () => {
  let newSwipe = this.state.swipe
  newSwipe--
  if(newSwipe >= 0)
  this.setState({ swipe: newSwipe })
    if(newSwipe < 3){
  this.setState({ firstCard: true})
  }
  }

swipingRight = () => {
  let newSwipe = this.state.swipe 
  newSwipe++
  if(newSwipe > 2){
  this.setState({ firstCard: false})
  }
  if(newSwipe <= 4)
  this.setState({ swipe: newSwipe})
  }


  render() {

    return (
      <Wrapper>
        <Header color={color.dark} rotate='true' text='Projects'/>
        <Box><span className={ this.state.firstCard ? 'active': ''} onClick={() => this.change(true)}>commercial</span>
        <span className={ this.state.firstCard ?  '' :'active'}  onClick={() => this.change(false)}>personal</span>
        <Bg firstCard={ this.state.firstCard} swipe={ this.state.swipe}/></Box>
    <Swipeable
    onSwipingLeft={()=>this.swipingLeft()}
    onSwipingRight={()=>this.swipingRight()}
  ><ProjectRowBox >
           {this.state.firstCard && this.state.commercial.map(p=>p.index === this.state.swipe && <ProjectLink key={`row-${p.index}`} image={p.image} page={p.page} name={p.name} title={p.title}/>)}
           {!this.state.firstCard && this.state.personal.map(p =>p.index === this.state.swipe && <ProjectLink key={`row-${p.index}`} image={p.image} page={p.page} name={p.name} title={p.title}/>)}
        </ProjectRowBox>
        </Swipeable>
     <Arrows><div className='left' onClick={()=>this.swipingLeft()}><Arrow left /></div>
    <div className='right' onClick={()=>this.swipingRight()}><Arrow /></div></Arrows>
      </Wrapper>
    );
  }
}

export default SectionProjects;
