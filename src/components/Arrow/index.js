import React from 'react';
import PropTypes from 'prop-types';
import {color, device} from '../../constants.js'
import styled from 'styled-components';
const blurShape = "M110,60c0,27.6-22.4,50-50,50c-27.6,0-50-22.4-50-50c0-27.6,22.4-50,50-50C87.6,10,110,32.4,110,60z";
const activeShape = "M96,60c0,27.6-8.4,53-36,53c-27.6,0-36-25.4-36-53c0-27.6,8.4-53,36-53C87.6,7,96,32.4,96,60z";

class Arrow extends React.Component  {
  // onActive = () => TweenMax.to(this.circle, .5, {
  //   attr: { d: activeShape },
  //   transformOrigin: 'center',
  //   ease: Elastic.easeOut
  // });

  // onBlur = () => TweenMax.to(this.circle, 1, {
  //   attr: { d: blurShape },
  //   ease: Elastic.easeOut
  // });

  render() {
    const { className } = this.props
    const arrowID = Math.random()

    return (
      <div
        className={className}
        // onMouseDown={this.onActive}
        // onTouchStart={this.onActive}
        // onMouseLeave={this.onBlur}
        // onMouseUp={this.onBlur}
      >
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          width="100%" height="100%"
        >
          <mask id={`${arrowID}`}>
            <rect fill="#fff" width="100%" height="100%"/>
            <path fill="#000" className="arrow" d="M48.5,61.5v-2.9h17.4l-8-8l2.1-2.1L71.5,60L60,71.5l-2.1-2.1l8-8H48.5z" />
          </mask>
          <path ref={el => this.circle = el} mask={`url(#${arrowID})`} d={blurShape} />
        </svg>
      </div>
    )
  }
}

Arrow = styled(Arrow)`
   @media ${device.laptop} {  
    width: 4rem;
  height:4rem;
         }
  width: 48px;
  height:48px;
  padding:1rem .5rem;
  fill: ${color.dark};
  cursor: inherit;
  ${({left}) => left && `transform: rotate(180deg);`}
`

export default Arrow;