import React from 'react';
import styled from 'styled-components';
import { withRouter} from 'react-router-dom';
import color from '../../constants.js'


const Item = styled.div`

 background:${color.dark};
 height: 2rem;
 width: 100%;
 height:10vh;
cursor:pointer;
 font-size:1.4em;
 line-height:2em;
 font-weight:400;
 letter-spacing:.3rem;
 transform-origin-y: 0%;
 color:  ${color.light};
 list-style-type: none;
 display:flex;
 justify-content: center;
 align-items:center;
max-height:10vh;
 z-index:99;

   
&:hover{
    color:#dbaf40;
  //  box-shadow: 2px 0px -2px -2px #dbaf40;
}

`;

const menu = [{
  name: 'Home',
  route: '#welcome'
}, {
  name: 'Blog',
  route: '#blog'
}, {
  name: 'Projects',
  route: '#projects'
}, {
  name: 'About',
  route: '#about'
}, {
  name: 'Contact',
  route: '#contact'
}]

const scrollToMyRef = (index,props) => { 
      props.history.push('/' + index);
 
    }
  

const Wrapper = styled.section`
    position:absolute;
    bottom:0;
    right:0;
    width:100vw;  
    z-index:88;
    color: ${color.light};
  `;

  const BlackBox = styled.div`
    width:100vw;
    // max-width:500px;
    height:40vh;
    background:${color.dark};
  `;


const Menu = (props) => {
  const { isOpen } = props;
  const Sidebar = styled.section`
  width:100vw;
  max-width:500px;
  display:flex;
  flex-direction:  column;
  margin: ${  isOpen ? '0rem' : '-200rem'};
  padding-bottom:10vh;
  background-color:${color.dark};

  `
  
  return (
    <Wrapper >
      <Sidebar className={ props.isOpen ? 'slideRight': ''}>
        <BlackBox></BlackBox>
        {
          menu.map((item, index) => <div  onClick={() => scrollToMyRef(item.route,props)} key={`item-${index}`}><Item>{item.name}</Item></div>)
        }
      </Sidebar>
    </Wrapper >
  );
}

export default withRouter(Menu);