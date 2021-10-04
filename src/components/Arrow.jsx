import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Arrow({ direction, handleClick, hidden }) {
  console.log(hidden);
  return (
    <ArrowButton direction={direction} onClick={handleClick} hidden={hidden}>
      {direction === "right" ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
    </ArrowButton>
  );
}

export default Arrow;

const ArrowButton = styled.div`
  position: absolute;
  top: 45%;
  ${(props) => (props.direction === "right" ? "right: 25px" : "left: 25px")};
  width: 30px;
  cursor: pointer;
  font-size: 30px;
  .MuiSvgIcon-root {
    fill: white;
  }
`;
