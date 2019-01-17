import React, { Component } from "react";
import styled, { css } from "styled-components";
import { color, device } from "../../constants.js";
import { ProjectLink, Header, Arrow } from "../";
import Cba from "../../assets/cba.png";
import Ob from "../../assets/ob.png";
import Inwedo from "../../assets/inwedo.png";
import Swipeable from "react-swipeable";

const Arrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    cursor: pointer;
  }
`;
const Wrapper = styled.section`
  background: ${color.light};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 4rem;
 
  transition: transform 0.9s ease-out;
  button {
    height: 2rem;
    line-height:40px;
    cursor: pointer;
    z-index: 10;
    background:none;
    border:none;
    letter-spacing:0.1rem;
    transform:scale(.85);
    &.active {
      transform:scale(1.15);
      color: ${color.light};
    }
    @media ${device.laptop} {
      width: 128px;
      margin-left: 100%;
    }
  }

`;
const Bg = styled.div`
  &:before {
    content: "";
    width: 60%;
    border-radius: 10rem;
    background: ${color.dark};
    @media ${device.laptop} {
      width: 128px;
      left: calc(100% - 68px);
    }
    left: 20%;
    height: 40px;
  
    position: absolute;
    top: 0;
    transition: transform 0.1s ease-out;
    ${props =>
      !props.firstCard &&
      css`
        transform: translate(0, 2rem);
      `};
  }
`;

const ProjectRowBox = styled.div`
    transition: all 0.6s;
    max-width:80vw
    height:30%;
    img{
      max-width:80vw;
    }  }
}`;
const SwipeableStyled = styled(Swipeable)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class SectionProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCard: true,
      swipe: 0,
      personal: [
        {
          index: 3,
          page: "https://cool-beer-app.herokuapp.com/",
          image: Cba,
          title: "Crafted beers app v0.1"
        },
        {
          index: 4,
          page: "https://invest-jar.herokuapp.com/",
          name: "Invest Jar",
          title: "Investing app v0.1"
        }
      ],
      commercial: [
        {
          index: 0,
          page: "http://www.offbeatmotion.tv/",
          image: Ob,
          personal: false,
          title: "Filming Agency"
        },
        {
          index: 1,
          page: "https://clickdesign.pl/",
          personal: false,
          name: "Clickdesign",
          title: "Web Agency"
        },
        {
          index: 2,
          page: "http://www.inwedo.com/",
          personal: false,
          image: Inwedo,
          title: "Software house"
        }
      ]
    };
  }

  change = type => {
    if (type) {
      this.setState({ firstCard: type, swipe: 0 });
    } else {
      this.setState({ firstCard: type, swipe: 3 });
    }
  };

  swipingLeft = () => {
    let newSwipe = this.state.swipe;
    newSwipe--;
    if (newSwipe >= 0) this.setState({ swipe: newSwipe });
    if (newSwipe < 3) {
      this.setState({ firstCard: true });
    }
  };

  swipingRight = () => {
    let newSwipe = this.state.swipe;
    newSwipe++;
    if (newSwipe > 2) {
      this.setState({ firstCard: false });
    }
    if (newSwipe <= 4) this.setState({ swipe: newSwipe });
  };

  render() {
    return (
      <Wrapper>
        <Header color={color.dark} rotate="true" text="Projects" />
        <Box>
          <button
            className={this.state.firstCard ? "active" : ""}
            onClick={() => this.change(true)}
          >
            CLIENTS
          </button>
          <button
            className={this.state.firstCard ? "" : "active"}
            onClick={() => this.change(false)}
          >
           PERSONAL
          </button>
          <Bg firstCard={this.state.firstCard} swipe={this.state.swipe} />
        </Box>
        <SwipeableStyled
          onSwipingLeft={() => this.swipingLeft()}
          onSwipingRight={() => this.swipingRight()}
        >
          <ProjectRowBox>
            {this.state.firstCard &&
              this.state.commercial.map(
                p =>
                  p.index === this.state.swipe && (
                    <ProjectLink
                      key={`row-${p.index}`}
                      image={p.image}
                      page={p.page}
                      name={p.name}
                      title={p.title}
                    />
                  )
              )}
            {!this.state.firstCard &&
              this.state.personal.map(
                p =>
                  p.index === this.state.swipe && (
                    <ProjectLink
                      key={`row-${p.index}`}
                      image={p.image}
                      page={p.page}
                      name={p.name}
                      title={p.title}
                    />
                  )
              )}
          </ProjectRowBox>
        </SwipeableStyled>
        <Arrows>
          <div className="left" onClick={() => this.swipingLeft()}>
            <Arrow left />
          </div>
          <div className="right" onClick={() => this.swipingRight()}>
            <Arrow />
          </div>
        </Arrows>
      </Wrapper>
    );
  }
}

export default SectionProjects;
