import React, { useState } from "react";
import logo from "../pics/main logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.nav`
  background-color: white;
  display: flex;
  height: 150px;
  padding: 0px 20px;

  justify-content: space-between;
`;
const LeftSide = styled.div``;
const RightSide = styled.div`
  @media (max-width: 900px) {
  }
  display: flex;
`;
const Logo = styled.img``;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  width: 600px;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: 400px;
    position: absolute;
    width: 50%;
    right: 0px;
    top: 80px;
    background-color: rgba(1, 1, 1, 0.8);
    height: 100%;
    z-index: 100;
    justify-content: start;
    animation-name: example;
    animation-duration: 1s;
    display: ${(props) => props.toggler ? 'flex' : 'none'};

    @keyframes example {
      0% {
        right: -60%;
        top: 80px;
      }

      100% {
        right: 0px;
        top: 80px;
      }
    }
  }
`;
const NavItem = styled.li`
  list-style-type: none;

  padding: 2px 3px;
  color: #000033;
  font-family: "Ubuntu";
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: right;
  @media (max-width: 900px) {
    color: white;
    font-size: 30px;
    margin-top: 40px;
  }
  cursor: pointer;
  &:hover {
    border-bottom: black 3px solid;
    font-weight: 400;
  }
`;
const BTN = styled.div`
  @media (max-width: 900px) {
    margin-top: 40px;
  }
`;

export const Btn = styled.button`
  padding: 10px 35px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #029837;
  border-radius: 20px;
  background-color: transparent;
  border-color: #029837;
  flex-grow: 0;
  cursor: pointer;
  width: 160px;

  &:hover {
    background-color: rgba(2, 152, 55, 1);
    color: white;
    border: none;
  }
`;
const Toggle = styled.button`
  @media (min-width: 900px) {
    display: none;
  }
  border: none;
  background-color: white;
  height: 50px;
  width: 70px;
  font-size: 40px;
  margin-top: 40px;
  float: right;
`;
function Header() {
  const [Toggler, setToggler] = useState(false);
  const handleClick = () => {
    setToggler((cur) => !cur);
    
  }


  return (
    <Container>
      <LeftSide>
        <Logo src={logo} />
      </LeftSide>
      <RightSide>
        <NavUl toggler={Toggler}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <NavItem>Home</NavItem>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <NavItem>About</NavItem>
          </Link>
          <Link to="/Services" style={{ textDecoration: "none" }}>
            <NavItem>Services</NavItem>
          </Link>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <NavItem>Pricing</NavItem>
          </Link>
          <Link to="/webinar" style={{ textDecoration: "none" }}>
            <NavItem>Webinar</NavItem>
          </Link>
          <Link to="/Contact" style={{ textDecoration: "none" }}>
            <BTN>
              <Btn>Contact US</Btn>
            </BTN>
          </Link>
        </NavUl>
        <Toggle onClick={handleClick}>
          {Toggler ? <> &#10005;</> : <>&#8801; </>}
        </Toggle>
      </RightSide>
    </Container>
  );
}

export default Header;
