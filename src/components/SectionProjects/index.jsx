import React, { Component } from 'react';
import styled from 'styled-components';
import { ProjectLink } from '../'
import Cba from '../../assets/cba.png'
import Ob from '../../assets/ob.png'
import Inwedo from '../../assets/inwedo.png'
import color from '../../constants.js'
import { Header } from '../'
class SectionProjects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstCard: true
    };
  }

  change = (type) => {
    this.setState({ firstCard: type})
  }

  render() {
    const Wrapper = styled.section`

    background-size: cover;
    height: 100vh;
    width:100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
      `;

      const Box= styled.div`
      background:${color.dark};
      background-size: cover;
      height: 30vh;
      min-height:88px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding-right:5%;
      button{
        width:50%;
        display:inline-block;
         padding:auto 3vw;
         border:0.16em solid ${color.light};
         margin:.5em;
         box-sizing: border-box;
         text-decoration:none;
         text-transform:uppercase;
         font-family:'Roboto',sans-serif;
         font-size:1em;
         color: ${color.light};
         text-align:center;
         transition: all 0.15s;
        background:none;
        cursor:pointer;
    
        &:focus{
          outline: none;
          color: ${color.primary};
        }
        &:hover{
           border-color:${color.primary};
          color:${color.primary};
          }

          &.active{
             border-color:${color.primary};
            color:${color.primary};
          }
      }
        `;

    const ProjectRowBox = styled.div`
        width: 70%;
        padding:5% 5% 5% 25%;
        background: ${color.light};
        height: 100%;
        display: flex;
        align-items:flex-end;
        flex-direction:column;
        z-index:4;
       

    }`

    return (
      <Wrapper>
        <Header color={color.dark} rotate='true' text='Projects'/>
        <Box><button className={ this.state.firstCard ? 'active': ''} onClick={() => this.change(true)}>Commercial</button><button className={ this.state.firstCard ?  '' :'active'}  onClick={() => this.change(false)}>Personal</button></Box>
        {!this.state.firstCard && <ProjectRowBox >
          <ProjectLink  page='https://cool-beer-app.herokuapp.com/'    image={Cba} title='Crafted beers app v0.1'/>
          <ProjectLink   page='https://invest-jar.herokuapp.com/'   name='Invest Jar' title='Investing app v0.1'/>
        </ProjectRowBox>}
        {this.state.firstCard && <ProjectRowBox >
          <ProjectLink page='http://www.offbeatmotion.tv/'  image={Ob} title='Filming Agency'/>
          <ProjectLink  page='https://clickdesign.pl/' name='Clickdesign.pl' title='Web Agency'/>
          <ProjectLink  page='http://www.inwedo.com/'   image={Inwedo} title='Software House'/>
        </ProjectRowBox>}
      </Wrapper>
    );
  }
}

export default SectionProjects;
