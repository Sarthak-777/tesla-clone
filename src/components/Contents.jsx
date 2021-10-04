import React from "react";
import styled from "styled-components";
import itemContents from "../itemContents";
import breakPoints from "../breakPoints";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Carousel, { consts } from "react-elastic-carousel";
// import "./Contents.css";

function Contents() {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  };
  return (
    <Item>
      <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
        {itemContents.map((item) => (
          <Container>
            <ItemImage key={item.id} src={item.img} />
            <h1>{item.title}</h1>
          </Container>
        ))}
      </Carousel>
    </Item>
  );
}

export default Contents;

const Item = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  > .rec.rec-carousel-wrapper {
    .rec.rec-pagination {
      display: none;
    }
  }
`;

const ItemImage = styled.img`
  height: 80%;
  object-fit: contain;
  width: 28vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;
  background-color: #f8f8f8;
  margin: 0px 20px 0px 20px;
  > h1 {
    margin-top: 60px;
    font-family: monospace;
    font-size: 18px;
  }
`;

const Button = styled.button`
  position: relative;
  width: 100px;
  border: none;
`;
