import React from "react";
import styled from "styled-components";
import { color } from "../../constants.js";
import spotlight from "../../assets/spotlight.jpg";
const ProjectLink = props => {
  const Wrapper = styled.div`
 background:cover;
  background-image: url(${props => props.img});

  border-radius:1rem;
  margin:1rem 0;
   box-sizing: border-box;
   font-family:'Roboto',sans-serif;
   font-weight:900;
   color:${color.light};
  width:80vw;
max-width:60vh;
min-height:30vh;
  p{
    margin:1rem;
     font-weight:300;
  }

}
  a {
    display:flex;
    text-decoration: none;
    flex-direction:column;
    justify-content:center;
    align-items:center;
     color:${color.light};
 div{
  min-height:20vh;
      display:flex;
      justify-content:center;
      align-items:center;
     
    }
    span{
      padding:10px;
      padding-top:40px;
      line-height:30px;
      font-size:4vh;
    }
    img{

      margin:3rem 0 0 0;
      width:70vw;
      max-width:360px;
    }
}
    `;

  return (
    <Wrapper img={spotlight}>
      <a href={props.page} rel="noopener noreferrer" target="_blank">
        <div>
          {props.image && <img src={props.image} alt="app icon" />}
          {props.name && <span>{props.name}</span>}
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </a>
    </Wrapper>
  );
};

export default ProjectLink;
