import React from 'react';
import styled from 'styled-components';


const ProjectLink = (props) => {

  const Wrapper = styled.section`
  height:20%;
  width:100%;
  border: 1px solid red;
  a {
    text-decoration: none;
    color: #696969 !important;
 
    h3 {
        background: transparent;
        display: flex;
        margin:0 !important,
        padding:0;
        justify-content: center;
        align-items: center;
        font-weight: 300;
    }
    img{
      transform: scale(.3);
    }
}
    `;

  return (<Wrapper>
    <a href='https://cool-beer-app.herokuapp.com/' >
      {/* <div>
        {props.image && <img src={props.image} alt='app icon' />}
        {props.name && <span>{props.name}</span>}
      </div> */}
      <span>{props.title}</span>
    </a>
  </Wrapper>)
}

export default ProjectLink;