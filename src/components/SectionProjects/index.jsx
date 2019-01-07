import React, { Component } from 'react';
import styled from 'styled-components';
import { ProjectLink } from '../'
import Cba from '../../assets/cba.png'
import Ob from '../../assets/ob.png'
import Inwedo from '../../assets/inwedo.png'

class SectionProjects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstCard: true
    };
  }

  change = () => {
    this.setState({ firstCard: !this.state.firstCard })
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
   
      background-size: cover;
      height: 30vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding-right:5%;
      button{
        width:50%;
        display:inline-block;
         padding:0.5em 3em;
         border:0.16em solid #FFFFFF;
         margin:.5em;
         box-sizing: border-box;
         text-decoration:none;
         text-transform:uppercase;
         font-family:'Roboto',sans-serif;
         font-weight:400;
         color:#FFFFFF;
         text-align:center;
         transition: all 0.15s;
        background:none;
        cursor:pointer;
        &:focus{
          outline: none;
          color:rgb(219, 175, 64);
        }
        &:hover{
           border-color:rgb(219, 175, 64);
          color:rgb(219, 175, 64);
          }

          &.active{
             border-color:rgb(219, 175, 64);
            color:rgb(219, 175, 64);
          }
      }
        `;

    const ProjectRowBox = styled.div`
        width: 85%;
        padding:5% 5% 5% 25%;
        background: white;
        height: 100%;
        display: flex;
        align-items:flex-start;
        flex-direction:column;
        z-index:10;
       

    }`

    return (
      <Wrapper>
        <Box><button className={this.state.firstCard && 'active'} onClick={() => this.change()}>Commercial</button><button  onClick={() => this.change()}>Personal</button></Box>
        {!this.state.firstCard && <ProjectRowBox >
          <ProjectLink  page='http://www.cool-beer-app.herokuapp.com/'    image={Cba} title='Crafted beers app v0.1'/>
          <ProjectLink   page='http://www.invest-jar.herokuapp.com/'   name='Invest Jar' title='Investing app v0.1'/>
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
