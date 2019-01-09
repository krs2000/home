import React from 'react';
import styled from 'styled-components';
import color from '../../constants.js'

const ProjectLink = (props) => {

  const Wrapper = styled.section`
  width:80%;
  display:inline-block;
   padding:0.2vh 1vh;
   border:0.16em solid ${color.light};
   margin:2vh 0.5em;
   box-sizing: border-box;
   text-decoration:none;
 max-width: 700px;
   font-family:'Roboto',sans-serif;
   font-weight:900;
   color:${color.light};
   text-align:center;
   transition: all 0.15s;
  box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.2);
  p{
    margin:auto;
     font-weight:300;
  }
&:hover{
box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
a p{
  font-weight:bold;
  margin:0;
}
}
  a {
    text-decoration: none;
    color: #696969 ;
    background-color:pink;
 
 div{
      display:flex;
      justify-content:center;
      align-items:center;
     
    }
    span{
  
      font-size:1.5em;
    }
    img{
      max-height:8vh;
    }

}
    `;

  return (<Wrapper >
    <a href={props.page} rel="noopener noreferrer" target="_blank"  >
      <div>
        {props.image && <img src={props.image} alt='app icon' />}
        {props.name && <span>{props.name}</span>}
      </div>
      <div>
      <p>{props.title}</p>
      </div>
    </a>
  </Wrapper>)
}

export default ProjectLink;