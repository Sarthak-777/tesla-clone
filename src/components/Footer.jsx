import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer>
      <span>Tesla-Clone © 2021</span>
      <span>Privacy & Legal</span>
      <span>Careers</span>
      <span>Forums</span>
      <span>Locations</span>
      <span>Shop FAQ</span>
      <span>tesla.com</span>
      <span>Project</span>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 70px;
  align-items: center;
  > span {
    font-size: 14px;
    margin: 10px;
    font-family: system-ui;
    opacity: 0.8;
    cursor: pointer;
  }
`;
