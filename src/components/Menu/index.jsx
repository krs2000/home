import React from 'react';
import styled from 'styled-components';
import { withRouter} from 'react-router-dom';
import {color} from '../../constants.js'
import { Link } from 'react-router-dom'

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
}
`;

const menu = [{
  name: 'Welcome'
}, {
  name: 'Blog'
}, {
  name: 'Projects'
}, {
  name: 'About'
}, {
  name: 'Contact'
}]

const scrollToMyRef = (index,props) => { 
      props.history.push('/' + index);
    }
  

const Wrapper = styled.section`
    position:fixed;
    bottom:0;
    right:0;
    width:100vw;  
    z-index:88;
    color: ${color.light};
  `;
const LinkStyled = styled(Link)`
text-decoration:none;
  `;

  const BlackBox = styled.div`
    width:100vw;
    max-width:240px;
    height:40vh;
    background:${color.dark};
  `;


const Menu = (props) => {
  const { isOpen } = props;
  const Sidebar = styled.section`
  width:100vw;
  max-width:240px;
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
          menu.map((item, index) => <LinkStyled to={`/${item.name}`} key={`item-${index}`}><Item>{item.name}</Item></LinkStyled>)
        }
      </Sidebar>
    </Wrapper >
  );
}

export default withRouter(Menu);