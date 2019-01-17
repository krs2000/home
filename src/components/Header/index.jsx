import React from "react";
import styled from "styled-components";
import { color, device } from "../../constants.js";
import { Bulb } from "./.";
const Header = props => {
  const Wrapper = styled.div`
    color: ${props.color ? props.color : color.dark};
    font-style: oblique;
    text-transform: capitalize;
    cursor: pointer;
  
    &:first-letter {
      color: ${color.primary};
    }
    @media ${device.laptop} {
    }
  `;

  return (
    <Wrapper>
      {props.text === "c" && (
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 360 360">
          <g id="XMLID_30_">
            <path
              id="XMLID_158_"
              fill="none"
              d="M109.8,154.5v95.4h12.3V266v30.6c0,1.7,2.1,2.4,3.2,1.1l40.1-47.9h120v-95.4H109.8z"
            />
            <path
              id="XMLID_153_"
              fill="none"
              stroke="#FAFBFA"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              d="M109.8,221.7v28.1h12.3V266
			v30.6c0,1.7,2.1,2.4,3.2,1.1l40.1-47.9h120v-95.4h-45.1"
            />

            <line
              id="XMLID_148_"
              fill="none"
              stroke="#FAFBFA"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              x1="230.9"
              y1="176.3"
              x2="263.9"
              y2="176.3"
            />

            <line
              id="XMLID_144_"
              fill="none"
              stroke="#FAFBFA"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              x1="216.6"
              y1="201.6"
              x2="263.9"
              y2="201.6"
            />

            <line
              id="XMLID_143_"
              fill="none"
              stroke="#FAFBFAs"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              x1="188.6"
              y1="226.9"
              x2="263.9"
              y2="226.9"
            />
            <path
              id="XMLID_139_"
              fill="none"
              d="M78.8,217.5l40.9-7.6c9.7,4.3,20.3,6.8,31.6,6.8c42.8,0,77.6-34.7,77.6-77.6
			c0-42.8-34.7-77.6-77.6-77.6c-42.8,0-77.6,34.7-77.6,77.6c0,15.1,4.4,29.2,11.9,41.1L78.8,217.5z"
            />
            <path
              id="XMLID_133_"
              fill="none"
              stroke="#DBAF40"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              d="M78.8,217.5l40.9-7.6
			c9.7,4.3,20.3,6.8,31.6,6.8c42.8,0,77.6-34.7,77.6-77.6c0-42.8-34.7-77.6-77.6-77.6c-42.8,0-77.6,34.7-77.6,77.6
			c0,15.1,4.4,29.2,11.9,41.1L78.8,217.5z"
            />
            <ellipse
              id="XMLID_132_"
              fill="none"
              cx="151.4"
              cy="139.6"
              rx="58.5"
              ry="59.9"
            />

            <circle
              id="XMLID_128_"
              fill="none"
              stroke="none"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              cx="188.6"
              cy="141.6"
              r="9.7"
            />
            <circle
              id="XMLID_127_"
              fill="none"
              stroke="none"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              cx="149.9"
              cy="141.6"
              r="9.7"
            />
            <circle
              id="XMLID_122_"
              fill="none"
              stroke="none"
              stroke-width="7.5938"
              stroke-miterlimit="10"
              cx="111.1"
              cy="141.6"
              r="9.7"
            />
          </g>
        </svg>
      )}

      {props.text === "c" && (
        <svg
          className="blog"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 360 360"
          enable-background="new 0 0 360 360"
        >
          <path
            id="XMLID_608_"
            fill="none"
            d="M277,256.1H69.1c-6.7,0-12.2-5.5-12.2-12.2V135.6c0-4.2,3.4-7.5,7.5-7.5H277V256.1z"
          />
          <path
            id="XMLID_610_"
            fill="none"
            stroke="#DBAF40"
            stroke-width="6.48"
            stroke-miterlimit="10"
            d="M128.9,256.1H73.6
	c-9.2,0-16.7-7.5-16.7-16.7V138.4c0-5.7,4.6-10.4,10.4-10.4H277"
          />
          <path
            id="XMLID_605_"
            fill="#FFFFFF"
            stroke="#DBAF40"
            stroke-width="8.64"
            stroke-miterlimit="10"
            d="M280.4,256.1H73.7
	c10.7,0,16.8-8.6,16.8-16.8l-0.4-125.7c0-5.7,4.6-10.4,10.3-10.4h179.5c5.7,0,10.3,4.6,10.3,10.3v132.6
	C290.2,251.7,285.8,256.1,280.4,256.1z"
          />
          <line
            id="XMLID_14_"
            fill="none"
            stroke="#DBAF40"
            stroke-width="6.48"
            stroke-miterlimit="10"
            x1="166.9"
            y1="213.9"
            x2="268.7"
            y2="213.9"
          />
          <line
            id="XMLID_15_"
            fill="none"
            stroke="#DBAF40"
            stroke-width="6.48"
            stroke-miterlimit="10"
            x1="153.5"
            y1="235.7"
            x2="255.3"
            y2="235.7"
          />
        </svg>
      )}
      {props.text === "c" && (
        <svg
          className="about"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 360 360"
        >
          <circle fill="#FFFFFF" cx="138.3" cy="180.9" r="75.1" />
        </svg>
      )}
      <h2>{props.text}</h2>
    </Wrapper>
  );
};

export default Header;
