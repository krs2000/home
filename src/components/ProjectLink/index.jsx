import React from "react";
import styled from "styled-components";
import { color } from "../../constants.js";

const ProjectLink = props => {
  const Wrapper = styled.div`
  background:none;
  margin:1rem 0;
   box-sizing: border-box;
   font-family:'Roboto',sans-serif;
   font-weight:900;
   color:${color.light};
  p{
    margin:auto;
     font-weight:300;
  }

}
  a {
    text-decoration: none;
    color: #696969 ;
 div{
     height:10vh;
      display:flex;
      justify-content:center;
      align-items:center;
     
    }
    span{
      padding:10px;
      line-height:30px;
    }
    img{
min-width:270px;
max-width:50vh;
    }
}
    `;

  return (
    <Wrapper>
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
