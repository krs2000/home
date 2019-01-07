import React from 'react';
import styled from 'styled-components';
import { withRouter} from 'react-router-dom';



const Item = styled.div`

 background:black;
 height: 2rem;
 width: 100%;
 height:10vh;
cursor:pointer;
 font-size:1.4em;
 line-height:2em;
 font-weight:400;
 letter-spacing:.3rem;
 transform-origin-y: 0%;
 color:  white;
 list-style-type: none;
 display:flex;
 justify-content: center;
 align-items:center;
max-height:10vh;
 z-index:99;
   box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.2);
   
&:hover{
    color: #dbaf40;
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
    color:white;

 
  `;

  const BlackBox = styled.div`
    width:100vw;
    max-width:500px;
    height:50vh;
    background:black;
  `;


const Menu = (props) => {
  const { isOpen } = props;
  const Sidebar = styled.section`
  width:100vw;
  max-width:500px;
  display:flex;
  flex-direction:  column;
  margin: ${  isOpen ? '0rem' : '-200rem'};

  
  

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