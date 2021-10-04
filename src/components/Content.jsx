import React from "react";
import styled from "styled-components";
import Contents from "./Contents";
import GridContainer from "./GridContainer";
import Footer from "./Footer";
function Content() {
  return (
    <Container>
      <TextContents>
        <h2>Best Sellers</h2>
        <p>Shop All</p>
      </TextContents>
      <ContentContainer>
        <Contents />
        <GridContainer />
      </ContentContainer>
      <Footer />
    </Container>
  );
}

export default Content;

const Container = styled.div``;

const TextContents = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  > h2 {
    text-transform: uppercase;
    font-size: 15px;
    font-family: monospace;
    margin: 30px 10px 30px 30px;
  }
  > p {
    font-size: 14px;
    font-family: monospace;
    color: #666;
    margin: 30px 20px 30px 10px;
  }
`;

const ContentContainer = styled.div``;
