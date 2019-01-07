import React ,{Component} from 'react';
// import styled from 'styled-components';
import { Motion, spring, presets } from 'react-motion';



  class MenuButton extends Component {
    constructor() {
      super()
      this.state = {
        isOpen: false
      }
    }
    
    componentWillMount(){
      this.setState({ isOpen: this.props.isOpen });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isOpen: nextProps.isOpen });
    }
    
    render() {
      const style = {
        padding: '1rem',
        width: '2rem',
        height:'2rem',
        color:'#dbaf40',
        overflow: 'visible',
        WebkitTapHighlightColor: "rgba(0,0,0,0)",
        ZIndex: 98
      }
      
      return (
        <svg 
          viewBox="0 0 96 96"
          height="1em"
          style={style}
        >
          <Motion 
            style={{
              x: spring(this.state.isOpen ? 1 : 0, presets.wobbly ),
              y: spring(this.state.isOpen ? 0: 1, presets.wobbly ),
            }}
          >
            {({ x, y }) =>
              <g 
                id="navicon" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="18" 
                strokeLinecap="round" 
                strokeLinejoin="round"
               >
                <line 
                  transform={`translate(${x * -7}, ${x * -12}) rotate(${x * 45}, 0, 30)`} 
                  x1="0" y1="0" x2="80" y2="0" 
                 />
                <line 
                  transform={`translate(${x * -2}, ${x * 5}) rotate(${x * -45}, 0, 30)`} 
                  x1="0" y1="50" x2="80" y2="50" 
                 />
                
              </g>
            }
          </Motion>
        </svg>
      )
    }
  }

export default MenuButton;