import React from 'react';
import styled from 'styled-components';
import { withRouter} from 'react-router-dom';



const Item = styled.div`
 background:#dbaf40;
 height: 2rem;
 width: 100vw;
cursor:pointer;
 font-size:1.3rem;
 line-height:1.3rem;
 padding:0.2rem;
 font-weight:400;
 letter-spacing:.3rem;
 transform-origin-y: 0%;
 color: white;
 list-style-type: none;
 display:flex;
 justify-content: center;
 align-items:center;
 position: relative;
 z-index:99;
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
    position:fixed;
    top:0rem;
    left:0re;
    z-index:88;
    color:white;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:flex-end;
  `;


const Menu = (props) => {
  const { isOpen } = props;
  const Sidebar = styled.section`
  margin: ${  isOpen ? '0rem' : '-200rem'};
  `
  
  return (
    <Wrapper >
      <Sidebar>
        {
          menu.map((item, index) => <div  onClick={() => scrollToMyRef(item.route,props)} key={`item-${index}`}><Item>{item.name}</Item></div>)
        }
      </Sidebar>

    </Wrapper >
  );
}

export default withRouter(Menu);