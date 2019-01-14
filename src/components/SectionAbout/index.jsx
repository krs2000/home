import React from 'react';
import styled from 'styled-components';
import {color, device} from '../../constants.js'
import { Header } from '../'
import lookUp from '../../assets/lookUp.svg'
import arrowUp from '../../assets/arrowUp.svg'

const Wrapper = styled.section`
height: 100vh;
width:100%;
 
position: relative;
color: ${color.light};
overflow: hidden;
div{
width:70%;
padding:0 15%;

@media ${device.laptop} {  
  padding:0 25%;
}
  h3{
    color: ${color.light};
    font-size: 4vh;
    text-align:start;
    margin:.5em 0 0.5em 0;
    font-weight: 300;
     cursor:pointer;
    img{
      padding:1.5rem 0 0 .4rem;
      height:2.5vh;
     
    }
  }
  span{
    color: ${color.primary};
   font-size: 3vh;
    margin:0.1vh 0 1vh 0;
    text-align:start;
    word-wrap:wrap;
  }
}
  `;

class SectionAbout extends React.Component {

    constructor(props) {
        super(props);
    this.state={
      options:[
        {header:`Front-end development`,
        text:`Well written JS, HTML and CSS can make your ideas happen.`
         },
        {header:`Responsive Design`,
        text:`No matter the device, your website will shine.`
        },
        {header:`Advanced  frameworks`,
        text:`Angular, React.js, Angular.js and willing to practise Vue.js.`
        },
        {header:`Advanced animations`,
        text:`Animations that can make your website alive.`
         },
        {header:`Wordpress`,
        text:`Most advanced extensions and plugins can make a difference.`
        }
      ],
      active: undefined
    }
    }
    componentWillMount(){
 this.setState({active: undefined})
    };

    // componentWillUnmount = () => {                        
                                        
    //   };                                         
    handleClick = (index) => {
     index !== this.state.active ? this.setState({active: index}) : this.setState({active: undefined}) 
    }

    render() {
  
       return (<Wrapper>
    <Header color={color.light} rotate='true' text='About'/>
    {/* <div> */}
   { this.state.options.map((option,index) =><div key={`about-${index}`}> <h3  onClick={()=>this.handleClick(index)}>{option.header}<img src={ this.state.active === index ? arrowUp : lookUp} alt='typehead' /></h3>
  { this.state.active === index && <span >{option.text}</span>}
   
   </div>) }
   {/* </div> */}
  </Wrapper>)
  
    }
      
    
}



 



export default SectionAbout;
