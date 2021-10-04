import React from "react";
import styled from "styled-components";
import gridContent from "../gridContent";

function GridContainer() {
  return (
    <Wrapper>
      <FirstContent image={gridContent[0].image}>
        <h1>{gridContent[0].title}</h1>
      </FirstContent>
      <SecondContent image={gridContent[1].image}>
        <h1>{gridContent[1].title}</h1>
      </SecondContent>
      <ThirdContent image={gridContent[2].image}>
        <h1>{gridContent[2].title}</h1>
      </ThirdContent>
      <FourthContent image={gridContent[3].image}>
        <h1>{gridContent[3].title}</h1>
      </FourthContent>
      <FifthContent image={gridContent[4].image}>
        <h1>{gridContent[4].title}</h1>
      </FifthContent>
      <SixthContent image={gridContent[5].image}>
        <h1>{gridContent[5].title}</h1>
      </SixthContent>
      <SeventhContent image={gridContent[6].image}>
        <h1>{gridContent[6].title}</h1>
      </SeventhContent>
      <EightContent image={gridContent[7].image}>
        <h1>{gridContent[7].title}</h1>
      </EightContent>
    </Wrapper>
  );
}

export default GridContainer;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 20px;
  margin: 20px;
`;

const FirstContent = styled.div`
  grid-column: 1/3;
  height: 50vh;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  > h1 {
    position: relative;
    top: 45%;
    left: 30%;
    font-size: 25px;
    font-family: system-ui;
    font-weight: 400;
  }
`;

const SecondContent = styled.div`
  grid-column: 1/2;
  height: 50vh;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  > h1 {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: system-ui;
    font-weight: 400;
    font-size: 25px;
  }
`;

const ThirdContent = styled.div`
  grid-column: 2/3;
  height: 50vh;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  > h1 {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: system-ui;
    font-weight: 400;
    font-size: 25px;
  }
`;

const FourthContent = styled.div`
  grid-column: 1/3;
  background-image: url("${(props) => props.image}");
  height: 50vh;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  > h1 {
    position: relative;
    top: 45%;
    right: 30%;
    font-size: 25px;
    font-family: system-ui;
    font-weight: 400;
  }
`;

const FifthContent = styled.div`
  grid-column: 1/2;
  grid-row: 4/6;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  h1 {
    position: relative;
    top: 25%;
    font-size: 25px;
    font-family: system-ui;
    font-weight: 400;
  }
`;

const SixthContent = styled.div`
  grid-column: 2/3;
  background-image: url("${(props) => props.image}");
  height: 50vh;
  background-size: cover;
  background-position-y: center;
  h1 {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: system-ui;
    font-weight: 400;
    font-size: 25px;
  }
`;

const SeventhContent = styled.div`
  grid-column: 2/3;
  background-image: url("${(props) => props.image}");
  height: 50vh;
  background-size: cover;
  background-position-y: center;
  h1 {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #111;
    font-family: system-ui;
    font-weight: 400;
    font-size: 25px;
  }
`;

const EightContent = styled(FourthContent)``;
