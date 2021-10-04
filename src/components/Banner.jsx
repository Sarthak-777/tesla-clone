import React, { useState } from "react";
import styled from "styled-components";
import { bannerContents } from "../bannerContents";
import "./Banner.css";
import Arrow from "./Arrow";

function Banner() {
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0,
    hiddenRight: false,
    hiddenLeft: true,
  });
  const { translate, transition, activeIndex, hiddenRight, hiddenLeft } = state;
  const slideWidth = window.innerWidth;
  console.log(state);
  const handleNextSlide = () => {
    if (activeIndex === bannerContents.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    setState({
      ...state,
      translate: slideWidth,
      activeIndex: activeIndex + 1,
      hiddenRight: true,
      hiddenLeft: false,
    });
  };
  const handlePrevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
      });
    }
    setState({
      ...state,
      translate: 0,
      activeIndex: 0,
      hiddenLeft: true,
      hiddenRight: false,
    });
  };

  return (
    <BannerMain>
      <BannerContainer translate={translate}>
        {bannerContents.map((content) => {
          return (
            <ImageContent>
              <Image
                key={content.id}
                src={content.src}
                alt={content.name}
              ></Image>
              <Content>
                <h1>{content.name}</h1>
                <p>{content.description}</p>
              </Content>
            </ImageContent>
          );
        })}
      </BannerContainer>
      <Arrow
        direction="right"
        handleClick={handleNextSlide}
        hidden={hiddenRight}
      />
      <Arrow
        direction="left"
        handleClick={handlePrevSlide}
        hidden={hiddenLeft}
      />
    </BannerMain>
  );
}

export default Banner;

const BannerMain = styled.div`
  position: relative;
`;

const BannerContainer = styled.div`
  display: flex;
  max-height: 90vh;
  transition: all 0.4s ease-out;
  transform: translate(-${(props) => props.translate}px);
`;

const ImageContent = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100vw;
  position: relative;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  position: absolute;
  width: 1000px;
  top: 25%;
  margin: 10px;
  h1 {
    color: #fff;
    text-transform: uppercase;
    padding: 10px;
    font-size: 21px;
    font-weight: 800;
    font-family: monospace;
  }
  p {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    padding: 10px;
    font-family: monospace;
  }
`;
