import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";

function Header() {
  const history = useHistory();
  const [burgerStatus, setBurgerStatus] = useState(false);
  // const cars = useSelector(selectCars);
  const cars = useSelector((state) => {
    return state.car.cars;
  });

  console.log(cars);

  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="" />
      </Link>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <Link key={index} to="#">
                <p>{car}</p>
              </Link>
            );
          })}
      </Menu>
      <RightMenu>
        <Link to="/shop">
          <p>Shop</p>
        </Link>
        <Link to="#">
          <p>Tesla Account</p>
        </Link>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                <Link to="#">
                  <p>{car}</p>
                </Link>
              </li>
            );
          })}
        <li>
          <Link to="#">
            <p>Existing Inventory</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <p>Used Inventory</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <p>Trade In</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <p>Cybertruck</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <p>Roadaster</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <p>Semi</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <p>Power Consumption</p>
          </Link>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
    color: black;
    transition: all 250ms ease-in;
    :hover {
      background-color: rgba(42, 46, 56, 0.2);
      border-radius: 25px;
      padding: 10px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    transition: all 250ms ease-in;
    :hover {
      background-color: rgba(42, 46, 56, 0.2);
      border-radius: 25px;
      padding: 10px;
    }
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    p {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
