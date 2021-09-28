import React from "react";
import styled from "styled-components";
import { bannerContents } from "../bannerContents";
import "./Banner.css";

function Banner() {
  console.log(bannerContents);
  return (
    <BannerContainer>
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
  );
}

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  max-height: 90vh;
  ::-webkit-scrollbar {
    display: none;
  }
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
    font-size: 26px;
    font-weight: 800;
    font-family: monospace;
  }
  p {
    color: #fff;
    font-size: 35px;
    font-weight: 600;
    padding: 10px;
    font-family: monospace;
  }
`;
