import React, { useState } from "react";
import "./Navbar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { charging, vehicleAccessories, apparel, lifestyle } from "../NavProps";

function Navbar() {
  const [value, setValue] = useState(false);
  const [navTitle, setNavTitle] = useState("");
  const handleProps = (val, title) => {
    setValue(val);
    setNavTitle(title);
  };
  const handlePropsLeave = () => {
    setValue(!value);
  };
  return (
    <Nav>
      <LogoContainer>
        <Link to="/">
          <img src="/images/Tesla.svg" alt="" class="logo-img" />
        </Link>
        <h2>Shop</h2>
      </LogoContainer>
      <MiddleContainer onMouseLeave={handlePropsLeave}>
        <h2 onMouseEnter={() => handleProps(true, charging)}>Charging</h2>
        <h2 onMouseEnter={() => handleProps(true, vehicleAccessories)}>
          Vehicles Accessories
        </h2>
        <h2 onMouseEnter={() => handleProps(true, apparel)}>Apparel</h2>
        <h2 onMouseEnter={() => handleProps(true, lifestyle)}>Lifestyle</h2>
      </MiddleContainer>
      {value && navTitle && (
        <HoverContainer
          onMouseEnter={() => handleProps(true, navTitle)}
          onMouseLeave={() => handleProps(false)}
        >
          <Container>
            {navTitle.slice(0, navTitle.length - 1).map((propTitle) => {
              return (
                <First>
                  <h2>{propTitle.title}</h2>
                  {propTitle.items && (
                    <ul>
                      {propTitle.items.map((item) => (
                        <List>{item}</List>
                      ))}
                    </ul>
                  )}
                </First>
              );
            })}
            <Img>
              <img src={navTitle[navTitle.length - 1].img} alt="" />
              <h2>{navTitle[navTitle.length - 1].title}</h2>
            </Img>
          </Container>
        </HoverContainer>
      )}
      <RightContainer>
        <h2>Sign In</h2>
        <CustomSearchIcon />
        <CustomShoppingCart />
      </RightContainer>
    </Nav>
  );
}

export default Navbar;

const LogoContainer = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  color: white;
  img {
    height: 14px;
    object-fit: contain;
    position: relative;
    top: 2px;
    fill: inherit;
  }
  h2 {
    margin-left: 30px;
    font-weight: 550;
    font-size: 16px;
    text-transform: uppercase;
    color: inherit;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  h2 {
    font-weight: 550;
    font-size: 16px;
    color: inherit;
    padding: 10px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: white;
  fill: white;
  h2 {
    font-weight: 550;
    font-size: 16px;
    color: inherit;
    text-transform: uppercase;
  }
  > .MuiSvgIcon-root {
    fill: inherit;
    font-size: 22px;
  }
`;

const CustomSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  margin: 10px;
`;

const CustomShoppingCart = styled(ShoppingCartOutlinedIcon)`
  cursor: pointer;
  margin-right: 10px;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 999;
  justify-content: space-between;
  color: white;
  :hover {
    background-color: white;
    ${LogoContainer} {
      color: black;
    }
    ${RightContainer} {
      color: black;
      fill: black;
    }
    ${MiddleContainer} {
      color: black;
    }
  }
`;

const HoverContainer = styled.div`
  position: absolute;
  top: 58px;
  max-height: 70vh;
  min-height: 20vh;
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
`;

const First = styled.div`
  margin-top: 60px;
  margin-left: 20px;
  flex: 0.15;
  > h2 {
    margin-left: 12px;
    font-family: monospace;
    font-size: 18px;
    width: 100%;
    text-align: start;
    border-bottom: 10px solid #d0d1d2;
  }
  > ul {
    margin-top: 40px;
  }
`;

const Second = styled(First)``;

const Third = styled(First)``;

const Img = styled.div`
  display: flex;
  flex: 0.3;
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 80px;
  flex-direction: column;
  font-family: monospace;
  align-items: center;
  justify-content: center;
  > img {
    width: 540px;
    object-fit: contain;
  }
  h2 {
    font-family: inherit;
    font-size: 16px;
    margin-top: 40px;
  }
`;

const List = styled.li`
  font-family: monospace;
  list-style: none;
  margin: 15px;
  font-size: 14px;
  text-align: start;
`;
